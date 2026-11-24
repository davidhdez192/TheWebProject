import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  margin?: number;
  title?: string;
}

export default function DraggableBox({
  children,
  margin = 16,
  title = "Media Player",
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: margin, y: margin });
  const [dragging, setDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const getSnappedPosition = (currentX: number, currentY: number) => {
    const box = boxRef.current;
    if (!box) return { x: currentX, y: currentY };

    const centerX = currentX + box.offsetWidth / 2;
    const centerY = currentY + box.offsetHeight / 2;

    return {
      x:
        centerX < window.innerWidth / 2
          ? margin
          : window.innerWidth - box.offsetWidth - margin,
      y:
        centerY < window.innerHeight / 2
          ? margin
          : window.innerHeight - box.offsetHeight - margin,
    };
  };

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    setPos({
      x: window.innerWidth - box.offsetWidth - margin,
      y: window.innerHeight - box.offsetHeight - margin,
    });
  }, [margin]);

  useEffect(() => {
    setPos((prev) => getSnappedPosition(prev.x, prev.y));
  }, [isMinimized, margin]);

  const toggleMinimize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMinimized((prev) => !prev);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !boxRef.current) return;
    const box = boxRef.current;
    const x = e.clientX - offset.current.x;
    const y = e.clientY - offset.current.y;
    setPos({
      x: Math.min(Math.max(0, x), window.innerWidth - box.offsetWidth),
      y: Math.min(Math.max(0, y), window.innerHeight - box.offsetHeight),
    });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
    setPos((prev) => getSnappedPosition(prev.x, prev.y));
  };

  return (
    <div
      ref={boxRef}
      className={`draggable-box ${dragging ? "is-dragging" : ""} ${
        isMinimized ? "is-minimized" : ""
      }`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div
        className="drag-handle"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <span className="drag-title">⋮⋮ {title}</span>
        <button
          type="button"
          className="minimize-btn"
          onClick={toggleMinimize}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label={isMinimized ? "Expand player" : "Minimize player"}
        >
          {isMinimized ? "▢" : "—"}
        </button>
      </div>

      <div className="drag-content">
        {children}
        {dragging && <div className="drag-shield" />}
      </div>
    </div>
  );
}
