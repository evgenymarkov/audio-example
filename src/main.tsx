import React, { useEffect } from 'react';
import { render } from 'react-dom';

import { playAudio } from './utils';
import beepSoundURL from './beep.mp3';

function App() {
  useEffect(() => {
    const audio = new Audio(beepSoundURL);

    const soundTimer = setInterval(() => {
      playAudio(audio);
    }, 3000);

    return () => {
      clearInterval(soundTimer);
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
