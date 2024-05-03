// import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition, Result } from "react-speech-kit";

export const Test = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: Result) => {
      console.log(result);
      setText(result.transcript); 
    },
  });
  
  const clickTest03 = () => {
    navigate("/test03");
  };

  return (
    <div>
      <button onClick={listen}>Start</button>
      <button onClick={stop}>Stop</button>
      {listening && <div>Listening...</div>}
      <p>{text}</p>
      <p>tts테스트하러가기</p>
      <button onClick={clickTest03}>Test03</button>
    </div>
  );
};
