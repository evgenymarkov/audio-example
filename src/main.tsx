import React, { useEffect } from 'react';
import { render } from 'react-dom';

import { createAudio, playAudio } from './utils';
import beepSoundURL from './beep.mp3';

function App() {
  useEffect(() => {
    let soundTimer: number | null = null;

    createAudio(beepSoundURL)
      .then((audio) => {
        soundTimer = setInterval(() => {
          playAudio(audio);
        }, 3000);
      })
      .catch((error) => {
        console.error(`Failed to create audio due to error: ${error.message}`);
      });

    return () => {
      if (soundTimer) {
        clearInterval(soundTimer);
      }
    };
  }, []);

  return null;
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
