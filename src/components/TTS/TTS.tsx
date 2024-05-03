import React, { useEffect, useState } from "react";
import clovaVoice from "../../apis/clovaVoice";

interface TTSProps {
  speaker: string;
  text: string; // text props의 타입을 string으로 지정
}
export const TTS: React.FC<TTSProps> = ({ text, speaker }) => {
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    handleSpeak();
  }, []);

  const handleSpeak = async () => {
    try {
      const response = await clovaVoice.post(
        "/tts-premium/v1/tts",
        {
          speaker: speaker,
          text: text,
          volume: 0,
          speed: 0,
          pitch: 0,
          format: "mp3",
        },
        {
          responseType: "blob", // 음성 파일을 Blob 형태로 받아야 합니다.
        }
      );
      console.log(response);
      const audioUrl = URL.createObjectURL(response.data);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error speaking text:", error);
    }
  };

  return (
    <div>
      {audioUrl && (
        <audio
          src={audioUrl}
          controls
          autoPlay
          style={{ opacity: "0", position: "absolute", zIndex: "1" }}
        />
      )}
    </div>
  );
};
