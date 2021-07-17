async function createAudio(
  soundURL: string,
  interactionTimeout = 5000,
): Promise<HTMLAudioElement> {
  return new Promise((resolve, reject) => {
    let isUnlocked = false;
    const audio = new Audio(soundURL);
    audio.volume = 1.0;

    function unlockAudio() {
      audio.play();
      audio.pause();
      audio.currentTime = 0;
      isUnlocked = true;

      document.body.removeEventListener('click', unlockAudio);
      document.body.removeEventListener('touchstart', unlockAudio);

      resolve(audio);
    }

    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);

    setTimeout(() => {
      if (isUnlocked) {
        return;
      }

      audio.remove();
      document.body.removeEventListener('click', unlockAudio);
      document.body.removeEventListener('touchstart', unlockAudio);

      reject(
        new Error(
          `User did not interact with application for ${interactionTimeout} ms`,
        ),
      );
    }, interactionTimeout);
  });
}

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

export { createAudio, playAudio };
