import { useEffect, useState } from 'react';
import axios from 'axios';

export const Test03 = () => {
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    handleSpeak();
  }, []);

  const handleSpeak = async () => {
    try {
      const response = await axios.post(
        '/api/tts-premium/v1/tts',
        {
          speaker: "nmeow",
          text: "안녕 나는 꾸미야. 만나서 반가워. 앞으로 사이좋게 지내자.",
          volume: 0,
          speed: 0,
          pitch: 0,
          format: 'mp3',
        },
        {
          headers: {
            'X-NCP-APIGW-API-KEY-ID': '1hn7bnzmda',
            'X-NCP-APIGW-API-KEY': 'U4FlTsaV5abhlLU0nos97o3fzOvCfR0CIkC5bmdr',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          responseType: 'blob', // 음성 파일을 Blob 형태로 받아야 합니다.
        }
      );
      console.log(response);
      const audioUrl = URL.createObjectURL(response.data);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error('Error speaking text:', error);
    }
  };

  return (
    <div>
      {audioUrl && <audio src={audioUrl} controls autoPlay />}
    </div>
  );
}

