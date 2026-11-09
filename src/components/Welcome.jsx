import { useEffect, useRef, useState } from "react";
import { wedding } from "../data/wedding";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function Welcome() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => {
      setDuration(audio.duration);
      setReady(true);
    };
    const onEnd = () => setPlaying(false);
    const onErr = () => setReady(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onErr);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onErr);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <section className="welcome-band" id="welcome">
      <div className="wrap">
        <audio ref={audioRef} src={wedding.song} preload="metadata" />
        <div className="song-player">
          <button
            type="button"
            className="song-player__play"
            aria-label={playing ? "Pause wedding song" : "Play wedding song"}
            onClick={toggle}
            disabled={!ready}
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <div className="song-player__track">
            <span>
              {formatTime(current)} / {formatTime(duration)}
            </span>
            <i />
          </div>
        </div>
        <p className="welcome-band__gold">Listen to our wedding song</p>
        <h2 className="welcome-band__title">Welcome to our wedding website</h2>
        <p className="welcome-band__copy">{wedding.welcome}</p>
        <p className="welcome-band__hash-label">Please use our wedding hashtags:</p>
        <p className="welcome-band__hash">{wedding.hashtags.join("  ·  ")}</p>
      </div>
    </section>
  );
}
