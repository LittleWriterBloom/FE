// import styled from "styled-components";
import { useState } from "react";
import { useSpeechRecognition, Result } from "react-speech-kit";

export const STT = () => {
  const [text, setText] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: Result) => {
      console.log(result);
      setText(result.transcript); 
    },
  });

  return (
    <div>
      <button onClick={listen}>Start</button>
      <button onClick={stop}>Stop</button>
      {listening && <div>Listening...</div>}
      <p>{text}</p>
    </div>
  );
};
