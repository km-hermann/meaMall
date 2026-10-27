let ctx: AudioContext | null = null;

function context() {
  if (typeof window === "undefined") return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return null;
  if (!ctx) ctx = new AudioCtx();
  return ctx;
}

function tone(
  audio: AudioContext,
  freq: number,
  start: number,
  dur: number,
  type: OscillatorType = "sine",
  gain = 0.08,
) {
  const osc = audio.createOscillator();
  const g = audio.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, start);
  g.gain.linearRampToValueAtTime(gain, start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, start + dur);
  osc.connect(g);
  g.connect(audio.destination);
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

export async function playDing() {
  const audio = context();
  if (!audio) return;
  if (audio.state === "suspended") await audio.resume();
  const t = audio.currentTime;
  tone(audio, 880, t, 0.12, "sine", 0.07);
  tone(audio, 1320, t + 0.08, 0.18, "triangle", 0.05);
}

export async function playSuccess() {
  const audio = context();
  if (!audio) return;
  if (audio.state === "suspended") await audio.resume();
  const t = audio.currentTime;
  tone(audio, 523, t, 0.12);
  tone(audio, 659, t + 0.12, 0.12);
  tone(audio, 784, t + 0.24, 0.22);
}
