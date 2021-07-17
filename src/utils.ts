function playAudio(audio: HTMLAudioElement): void {
  audio
    .play()
    .then(() => {
      console.info('Sound successfully played');
    })
    .catch((error) => {
      console.error('Failed to play sound', error);
    });
}

export { playAudio };
