import React, { useState, useRef, useEffect } from 'react';

const TRACKS = [
  {
    title: "Interstellar Theme",
    artist: "Hans Zimmer",
    src: "https://res.cloudinary.com/dl9ey6o4d/video/upload/v1773381912/22-no-time-for-caution-docking-scene-1_9qvkpoJC_axf6tm.mp3",
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const track = TRACKS[trackIndex];

  // ── Single effect: scroll triggers play, runs once ──
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = TRACKS[trackIndex].src;
    audio.volume = 0.4;

    let started = false;

    const onScroll = () => {
      if (started) return;
      started = true;
      window.removeEventListener('scroll', onScroll);
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // eslint-disable-line

  // ── Audio event listeners ──
  useEffect(() => {
    const audio = audioRef.current;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => {
      const next = (trackIndex + 1) % TRACKS.length;
      setTrackIndex(next);
      audio.src = TRACKS[next].src;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, [trackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const changeTrack = (dir) => {
    const audio = audioRef.current;
    const next = (trackIndex + dir + TRACKS.length) % TRACKS.length;
    setTrackIndex(next);
    audio.src = TRACKS[next].src;
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const fmt = (t) => {
    if (!t || isNaN(t)) return '0:00';
    return `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} />

      <div style={{
        position: 'fixed', bottom: '24px', right: '16px', zIndex: 200,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Expanded Panel */}
        <div style={{
          overflow: 'hidden',
          maxHeight: isExpanded ? '220px' : '0px',
          opacity: isExpanded ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease',
          marginBottom: isExpanded ? '8px' : '0px',
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.92)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px', padding: '16px', width: '220px',
            backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {track.title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', margin: '2px 0 0', letterSpacing: '0.05em' }}>
                {track.artist}
              </p>
            </div>

            <div onClick={seek} style={{
              width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px', cursor: 'pointer', marginBottom: '6px',
            }}>
              <div style={{
                width: `${progress}%`, height: '100%',
                background: 'rgba(255,255,255,0.7)', borderRadius: '2px',
              }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.25)', fontSize: '10px', marginBottom: '14px' }}>
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '14px' }}>
              <button onClick={() => changeTrack(-1)} style={btnStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
              </button>
              <button onClick={togglePlay} style={{ ...btnStyle, width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {isPlaying
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                }
              </button>
              <button onClick={() => changeTrack(1)} style={btnStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              <input type="range" min="0" max="1" step="0.01" value={volume}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setVolume(v);
                  audioRef.current.volume = v;
                }}
                style={{ flex: 1, height: '3px', cursor: 'pointer', accentColor: 'rgba(255,255,255,0.6)' }}
              />
            </div>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.85)',
            border: `1px solid ${isPlaying ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.12)'}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            boxShadow: isPlaying ? '0 0 16px rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.6)' : '0 4px 16px rgba(0,0,0,0.6)',
            transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
          }}
        >
          {isPlaying && (
            <div style={{
              position: 'absolute', inset: '-1px', borderRadius: '50%',
              background: 'conic-gradient(rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'spin 3s linear infinite',
            }} />
          )}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {isPlaying ? (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{
                    width: '3px', background: 'rgba(255,255,255,0.85)', borderRadius: '2px',
                    animation: `bar${i} ${0.5 + i * 0.15}s ease-in-out infinite alternate`,
                  }} />
                ))}
              </div>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bar1 { from { height: 4px; } to { height: 14px; } }
        @keyframes bar2 { from { height: 8px; } to { height: 5px; } }
        @keyframes bar3 { from { height: 12px; } to { height: 6px; } }
      `}</style>
    </>
  );
};

const btnStyle = {
  background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '28px', height: '28px', borderRadius: '8px', padding: 0,
};

export default MusicPlayer;