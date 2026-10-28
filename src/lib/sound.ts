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

// Controller for background celebration audio
let activeAudioElement: HTMLAudioElement | null = null;
let synthLoopTimeout: number | null = null;
let isAudioPlaying = false;
let celebrationMasterGain: GainNode | null = null;
let activeOscillators: OscillatorNode[] = [];

// Chime note with soft bell harmonic connected to master gain
function musicBoxNote(
  audio: AudioContext,
  freq: number,
  start: number,
  dur: number,
  volume = 0.09,
) {
  if (!celebrationMasterGain) return;

  // Fundamental
  const osc1 = audio.createOscillator();
  const g1 = audio.createGain();
  osc1.type = "sine";
  osc1.frequency.value = freq;
  g1.gain.setValueAtTime(0, start);
  g1.gain.linearRampToValueAtTime(volume, start + 0.015);
  g1.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc1.connect(g1);
  g1.connect(celebrationMasterGain);

  // Sparkly overtone (2nd harmonic)
  const osc2 = audio.createOscillator();
  const g2 = audio.createGain();
  osc2.type = "triangle";
  osc2.frequency.value = freq * 2;
  g2.gain.setValueAtTime(0, start);
  g2.gain.linearRampToValueAtTime(volume * 0.35, start + 0.01);
  g2.gain.exponentialRampToValueAtTime(0.0001, start + dur * 0.6);
  osc2.connect(g2);
  g2.connect(celebrationMasterGain);

  activeOscillators.push(osc1, osc2);

  osc1.onended = () => {
    activeOscillators = activeOscillators.filter((o) => o !== osc1);
  };
  osc2.onended = () => {
    activeOscillators = activeOscillators.filter((o) => o !== osc2);
  };

  osc1.start(start);
  osc1.stop(start + dur + 0.02);
  osc2.start(start);
  osc2.stop(start + dur * 0.6 + 0.02);
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

export function isCelebrationPlaying() {
  return isAudioPlaying;
}

export function stopCelebrationAudio() {
  isAudioPlaying = false;

  if (synthLoopTimeout) {
    window.clearTimeout(synthLoopTimeout);
    synthLoopTimeout = null;
  }

  // 1. Immediately pause and reset HTML5 Audio element
  if (activeAudioElement) {
    try {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
    } catch {
      // ignore
    }
    activeAudioElement = null;
  }

  // 2. Immediately mute and disconnect master Web Audio gain
  if (celebrationMasterGain && ctx) {
    try {
      celebrationMasterGain.gain.cancelScheduledValues(ctx.currentTime);
      celebrationMasterGain.gain.setValueAtTime(0, ctx.currentTime);
      celebrationMasterGain.disconnect();
    } catch {
      // ignore
    }
    celebrationMasterGain = null;
  }

  // 3. Immediately stop and disconnect all scheduled oscillators
  activeOscillators.forEach((osc) => {
    try {
      osc.stop();
      osc.disconnect();
    } catch {
      // ignore
    }
  });
  activeOscillators = [];
}

export async function startCelebrationAudio(onStateChange?: (playing: boolean) => void) {
  stopCelebrationAudio();
  isAudioPlaying = true;
  onStateChange?.(true);

  // 1. Try loading user-supplied MP3 from /audio/birthday.mp3
  try {
    const audio = new Audio("/audio/birthday.mp3");
    audio.loop = true;
    audio.volume = 0.65;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      await playPromise;
      if (!isAudioPlaying) {
        audio.pause();
        return;
      }
      activeAudioElement = audio;
      audio.onended = () => {
        if (!isAudioPlaying) onStateChange?.(false);
      };
      return;
    }
  } catch {
    // If MP3 file not found or browser blocked, gracefully fallback to Web Audio synthesis!
  }

  if (!isAudioPlaying) return;

  // 2. Web Audio Music Box Birthday Melody
  const audioCtx = context();
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") await audioCtx.resume();

  celebrationMasterGain = audioCtx.createGain();
  celebrationMasterGain.gain.setValueAtTime(1, audioCtx.currentTime);
  celebrationMasterGain.connect(audioCtx.destination);

  function playSong() {
    if (!isAudioPlaying || !celebrationMasterGain) return;
    const now = audioCtx!.currentTime;

    // Happy Birthday notes and timings [freq, duration, delay]
    const notes: [number, number, number][] = [
      [392.0, 0.32, 0],       // G4
      [392.0, 0.22, 0.35],    // G4
      [440.0, 0.5, 0.6],      // A4
      [392.0, 0.5, 1.15],     // G4
      [523.25, 0.55, 1.7],    // C5
      [493.88, 0.9, 2.3],     // B4

      [392.0, 0.32, 3.4],     // G4
      [392.0, 0.22, 3.75],    // G4
      [440.0, 0.5, 4.0],      // A4
      [392.0, 0.5, 4.55],     // G4
      [587.33, 0.55, 5.1],    // D5
      [523.25, 0.9, 5.7],     // C5

      [392.0, 0.32, 6.8],     // G4
      [392.0, 0.22, 7.15],    // G4
      [783.99, 0.55, 7.4],    // G5
      [659.25, 0.55, 8.0],    // E5
      [523.25, 0.55, 8.6],    // C5
      [493.88, 0.55, 9.2],    // B4
      [440.0, 0.9, 9.8],      // A4

      [698.46, 0.35, 11.0],   // F5
      [698.46, 0.25, 11.4],   // F5
      [659.25, 0.55, 11.7],   // E5
      [523.25, 0.55, 12.3],   // C5
      [587.33, 0.55, 12.9],   // D5
      [523.25, 1.2, 13.5],    // C5
    ];

    notes.forEach(([f, d, offset]) => {
      musicBoxNote(audioCtx!, f, now + offset, d);
    });

    // Loop the melody gently every ~16 seconds
    synthLoopTimeout = window.setTimeout(() => {
      if (isAudioPlaying) {
        playSong();
      }
    }, 15500);
  }

  playSong();
}
