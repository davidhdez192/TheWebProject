import { useEffect, useRef, useState } from "react";

export interface Track {
  title: string;
  artist?: string;
  src: string; // e.g. "/music/song1.mp3" (files in /public) or a full URL
}

interface Props {
  tracks: Track[];
}

const fmt = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
};

export default function MediaPlayer({ tracks }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffle, setShuffle] = useState(false);

  const track = tracks[index];

  // When the track changes, load it and keep playing if we were already playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const next = () =>
    setIndex((i) =>
      shuffle
        ? Math.floor(Math.random() * tracks.length)
        : (i + 1) % tracks.length,
    );
  const prev = () => {
    const audio = audioRef.current;
    // restart the track if more than 3s in, otherwise go back
    if (audio && audio.currentTime > 3) audio.currentTime = 0;
    else setIndex((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setTime(t);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="media-player">
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={next}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="mp-info">
        <strong>{track.title}</strong>
        {track.artist && <span>{track.artist}</span>}
      </div>

      <div className="mp-progress">
        <span>{fmt(time)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={time}
          onChange={seek}
        />
        <span>{fmt(duration)}</span>
      </div>

      <div className="mp-controls">
        <button
          onClick={() => setShuffle((s) => !s)}
          className={shuffle ? "active" : ""}
        >
          🔀
        </button>
        <button onClick={prev}>⏮</button>
        <button onClick={togglePlay} className="play">
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={next}>⏭</button>
        <input
          className="mp-volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={changeVolume}
        />
      </div>

      <ul className="mp-playlist">
        {tracks.map((t, i) => (
          <li
            key={t.src}
            className={i === index ? "current" : ""}
            onClick={() => setIndex(i)}
          >
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
