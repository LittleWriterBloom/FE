import React, { useEffect, useState } from "react";
import apis from "../../apis/apis";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";

interface TTSProps {
  speaker: string;
  text: string; // text props의 타입을 string으로 지정
}

export const TTS: React.FC<TTSProps> = ({ text, speaker }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const [act] = useAtom(accessTokenAtom);

  useEffect(() => {
    handleSpeak()
  }, []);

  const handleSpeak = async () => {
    try {
      const response = await apis.post(
        "/tts",
        {
          speaker: speaker,
          text: text,
          volume: 0,
          speed: 0,
          pitch: 0
        },
        {
          headers: {
            Authorization: `Bearer ${act}`,
          },
          responseType: "blob",
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
        >
        </audio>
      )}
    </div>
  );
};
