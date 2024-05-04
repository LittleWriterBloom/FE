import React, { useEffect, useState } from "react";
// import clovaVoice from "../../apis/clovaVoice";
import axios from "axios";

interface TTSProps {
  speaker: string;
  text: string; // text props의 타입을 string으로 지정
}

const clovaApiKeyId = import.meta.env.VITE_CLOVA_VOICE_API_KEY_ID;
const clovaApiKey = import.meta.env.VITE_CLOVA_VOICE_API_KEY;

export const TTS: React.FC<TTSProps> = ({ text, speaker }) => {
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    handleSpeak();
  }, []);

  const handleSpeak = async () => {
    try {
      const response = await axios.post(
        "/api/tts-premium/v1/tts",
        {
          speaker: speaker,
          text: text,
          volume: 0,
          speed: 0,
          pitch: 0,
          format: "mp3",
        },
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": clovaApiKeyId,
            "X-NCP-APIGW-API-KEY": clovaApiKey,
            "Content-Type": "application/x-www-form-urlencoded"
          },
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
