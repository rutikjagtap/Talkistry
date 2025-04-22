'use client';

import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Mic, MicOff, RefreshCw, Volume2, Pause, Play, StopCircle, Circle } from 'lucide-react';
import { useToast } from './use-toast';

interface ReadAloudProps {
  storyText: string;
}

interface WordResult {
  word: string;
  correct: boolean;
}

function cleanText(str: string): string {
  return str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .toLowerCase();
}

function compareWords(expected: string, spoken: string): { result: WordResult[]; percent: number } {
  const expectedWords = cleanText(expected).split(' ');
  const spokenWords = cleanText(spoken).split(' ');

  let correct = 0;
  const result: WordResult[] = expectedWords.map(word => {
    const matchingWords = spokenWords.filter(spokenWord => spokenWord.includes(word));
    if (matchingWords.length > 0) {
      correct++;
      return { word, correct: true };
    } else {
      return { word, correct: false };
    }
  });

  const percent = expectedWords.length > 0 ? Math.round((correct / expectedWords.length) * 100) : 0;
  return { result, percent };
}

const ReadAloud: React.FC<ReadAloudProps> = ({ storyText }) => {
  const { toast } = useToast();
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();

  const [partialTranscript, setPartialTranscript] = useState('');
  const [result, setResult] = useState<{ result: WordResult[]; percent: number }>({ result: [], percent: 0 });

  const [startTime, setStartTime] = useState<number | null>(null);
  const [listeningTime, setListeningTime] = useState<number>(0);

  const synthesis = typeof window !== 'undefined' ? window.speechSynthesis : null;
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [audioURL, setAudioURL] = useState('');

  const [currentWordIndex, setCurrentWordIndex] = useState<number | null>(null);

  useEffect(() => {
    if (synthesis) {
      const loadVoices = () => {
        const voices = synthesis.getVoices();
        const selected = voices.find(v => v.lang === 'en-US' && !v.name.toLowerCase().includes('google')) || voices[0];
        setVoice(selected || null);
      };

      if (synthesis.getVoices().length > 0) {
        loadVoices();
      } else {
        synthesis.onvoiceschanged = loadVoices;
      }
    }
  }, [synthesis]);

  useEffect(() => {
    if (listening) {
      setPartialTranscript(transcript);
    }
  }, [transcript, listening]);

  useEffect(() => {
    setResult(compareWords(storyText, partialTranscript));
  }, [partialTranscript, storyText]);

  const handleListen = () => {
    if (!synthesis || !storyText || isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance(storyText);
    utterance.voice = voice!;
    utterance.rate = 1;

    const words = storyText.trim().split(/\s+/);

    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.name === 'word' || event.charIndex !== undefined) {
        const charIndex = event.charIndex;
        const upto = storyText.substring(0, charIndex);
        const index = upto.trim().split(/\s+/).length - 1;
        setCurrentWordIndex(index);
      }
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentWordIndex(null);
    };

    utteranceRef.current = utterance;
    synthesis.speak(utterance);
    setIsSpeaking(true);
    setIsPaused(false);
    toast({ title: 'Playing Story', description: 'Voice started' });
  };

  const handlePause = () => {
    if (synthesis && isSpeaking && !isPaused) {
      synthesis.pause();
      setIsPaused(true);
      toast({ title: 'Paused', description: 'Speech paused' });
    }
  };

  const handleResume = () => {
    if (synthesis && isSpeaking && isPaused) {
      synthesis.resume();
      setIsPaused(false);
      toast({ title: 'Resumed', description: 'Speech resumed' });
    }
  };

  const handleStopListen = () => {
    if (synthesis) {
      synthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentWordIndex(null);
      toast({ title: 'Stopped', description: 'Speech synthesis stopped' });
    }
  };

  const startReading = () => {
    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
      toast({ title: 'Mic Not Available', description: 'Browser or mic issue', variant: 'destructive' });
      return;
    }

    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    setStartTime(Date.now());
    setPartialTranscript('');
    toast({ title: 'Started Reading', description: 'Mic on. Speak clearly.' });
  };

  const stopReading = () => {
    SpeechRecognition.stopListening();
    setPartialTranscript(transcript);

    if (startTime) {
      const duration = (Date.now() - startTime) / 1000;
      setListeningTime(duration);
    }

    toast({ title: 'Stopped Reading', description: `Accuracy: ${result.percent}%` });
  };

  const handleReset = () => {
    resetTranscript();
    setPartialTranscript('');
    setResult({ result: [], percent: 0 });
    setAudioURL('');
    setListeningTime(0);
    setCurrentWordIndex(null);
    toast({ title: 'Reset Complete', description: 'Everything cleared.' });
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioURL(URL.createObjectURL(blob));
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch (err) {
      toast({ title: 'Mic Blocked', description: 'Check mic permission.', variant: 'destructive' });
    }
  };

  const handleStopRecording = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder) {
      recorder.stop();
      recorder.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      {/* Buttons Section */}
      <div className="flex flex-wrap gap-3">
        {/* Speech Recognition */}
        <button onClick={startReading} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <Mic size={20} /> Start Reading
        </button>
        <button onClick={stopReading} className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <MicOff size={20} /> Stop Reading
        </button>
        <button onClick={handleReset} className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <RefreshCw size={20} /> Reset
        </button>

        {/* Listen Controls */}
        <button onClick={handleListen} disabled={isSpeaking} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <Play size={20} /> Listen
        </button>
        <button onClick={handlePause} disabled={!isSpeaking || isPaused} className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <Pause size={20} /> Pause
        </button>
        <button onClick={handleResume} disabled={!isPaused} className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <Volume2 size={20} /> Resume
        </button>
        <button onClick={handleStopListen} disabled={!isSpeaking} className="bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2">
          <StopCircle size={20} /> Stop Listen
        </button>

        {/* Recording Controls */}
        {!isRecording ? (
          <button onClick={handleStartRecording} className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <Circle size={20} /> Start Recording
          </button>
        ) : (
          <button onClick={handleStopRecording} className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <StopCircle size={20} /> Stop Recording
          </button>
        )}
      </div>

      {/* Audio Recording Player */}
      {audioURL && (
        <div>
          <p className="text-gray-700">🎧 Your Recording:</p>
          <audio controls src={audioURL} className="w-full mt-2" />
        </div>
      )}

      {/* Reading Progress */}
      <div>
        <h2 className="text-xl font-semibold">📊 Reading Progress</h2>
        <p className="text-lg">{result.percent}% Accuracy</p>
        {listeningTime > 0 && <p className="text-yellow-600 text-sm mt-1">⏱️ Listening Time: {listeningTime.toFixed(2)} seconds</p>}
      </div>

      {/* What user spoke */}
      <div>
        <h2 className="text-lg font-semibold mt-4">📜 You Said:</h2>
        <p className="text-sm">{partialTranscript}</p>
      </div>

      {/* Word highlighting (with yellow current word) */}
      <div className="flex flex-wrap gap-2 mt-4">
        {storyText.trim().split(/\s+/).map((word, idx) => {
          const resultItem = result.result[idx];
          const isCurrent = idx === currentWordIndex;

          let className = "px-2 py-1 rounded";
          if (isCurrent) {
            className += " bg-yellow-300 text-black";
          } else if (resultItem?.correct) {
            className += " bg-green-200 text-green-800";
          } else {
            className += " bg-red-200 text-red-800";
          }

          return (
            <span key={idx} className={className}>
              {word}
            </span>
          );
        })}
      </div>

      {/* Listening Status */}
      {listening && (
        <p className="mt-4 text-blue-600 font-semibold">🎤 Listening... Speak clearly into your microphone.</p>
      )}
    </div>
  );
};

export default ReadAloud;
