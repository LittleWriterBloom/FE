declare module 'react-speech-kit' {
  export interface Result {
    transcript: string;
    isFinal: boolean;
  }

  export interface SpeechRecognitionHookOptions {
    onResult: (result: Result) => void;
  }

  export function useSpeechRecognition(
    options: SpeechRecognitionHookOptions
  ): {
    listen: () => void;
    listening: boolean;
    stop: () => void;
  };
}