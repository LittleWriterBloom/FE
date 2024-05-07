import styled from "styled-components";
import { Result, useSpeechRecognition } from "react-speech-kit";
import { btnMic } from "../../assets";
import Lottie from "react-lottie-player";
import voice from "../../assets/Lottie/voiceRecognition.json";
import { useState } from "react";

interface STTProps {
  listening: boolean;
  startListening: () => void;
  stopListening: () => void;
  onSpeechResult: (result: string) => void;
}

export const SpeechToText: React.FC<STTProps> = ({ listening, startListening, stopListening, onSpeechResult }) => {
  const [rec, setRec] = useState(false);
  const [speech, setSpeech] = useState<string>("");

  const { listen, stop } = useSpeechRecognition({
    onResult: (result: Result) => {
      const text = typeof result === "string" ? result : result.transcript;
      console.log(text);
      setSpeech(text);
      onSpeechResult(text);
    },
  });

  const handleAnimationEnd = () => {
    setRec(false);
  };

  const onClickStopRec = () => {
    setRec(false);
    stopListening();
    handleAnimationEnd();
  };

  return (
    <LoadingContainer>
      {!listening && !rec && (
        <Rec onClick={listen}>
          <RecImg src={btnMic} alt="음성 인식 시작" onClick={() => startListening()}/>
        </Rec>
      )}
      {listening && (
        <Rec onClick={stop}>
          <Lottie
            loop
            animationData={voice}
            play
            style={{
              width: "8rem",
              height: "8rem",
            }}
            onComplete={handleAnimationEnd}
            onClick={onClickStopRec}
          />
        </Rec>
      )}
      <textarea
        value={speech}
        onChange={(event) => setSpeech(event.target.value)}
        style={{ display: "none" }}
      />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  position: absolute;
  z-index: 300;
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Rec = styled.button`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

const RecImg = styled.img`
  width: 5.7rem;
  height: 6.2rem;
  cursor: pointer;
`;
