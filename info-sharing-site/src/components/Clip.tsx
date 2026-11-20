export default function Clip() {
    return (
        <video
            controls
            playsInline
            preload="none"
            className="clip-container"
        >
            <source src="/videos/vlipsy-dancing-cat-B1LcGoQa.webm" type="video/webm" />
            <source src="/videos/vlipsy-dancing-cat-B1LcGoQa.mp4" type="video/mp4" />
            Your browser does not support video playback.
        </video>
    );
}