// MicTest.tsx
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const MicTest: React.FC = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser doesn't support speech recognition.");
    }

    if (!isMicrophoneAvailable) {
      alert("Microphone not available. Please check mic permissions.");
    }
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable]);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎙 Mic Test</h1>
      <button onClick={startListening} style={{ marginRight: '10px' }}>
        Start Listening
      </button>
      <button onClick={stopListening} style={{ marginRight: '10px' }}>
        Stop Listening
      </button>
      <button onClick={resetTranscript}>Reset</button>

      <p style={{ marginTop: '2rem' }}>
        <strong>Listening:</strong> {listening ? "Yes" : "No"}
      </p>
      <p>
        <strong>Transcript:</strong> {transcript || "Start speaking..."}
      </p>
    </div>
  );
};

export default MicTest;
