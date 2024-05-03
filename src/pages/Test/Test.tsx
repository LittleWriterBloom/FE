// import styled from "styled-components";
import { useSpeechRecognition, Result } from "react-speech-kit";

export const Test = () => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: Result) => {
      console.log(result);
    },
  });

  return (
    <div>
      <button onClick={listen}>Start</button>
      <button onClick={stop}>Stop</button>
      {listening && <div>Listening...</div>}
    </div>
  );
};
