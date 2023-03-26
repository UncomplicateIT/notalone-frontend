export const speak = (text: string, onEndCallback: () => void) => {
  if (!("speechSynthesis" in window)) return;

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
  utterThis.onend = (e) => {
    onEndCallback();
  };
  return synth;
};

export const pause = (synth: SpeechSynthesis) => {
  synth.pause();
};

export const resume = (synth: SpeechSynthesis) => {
  synth.resume();
};

export const cancel = (synth: SpeechSynthesis) => {
  synth.cancel();
};
