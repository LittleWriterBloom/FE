import React, { useState } from 'react';
import axios from 'axios';

export const Test03 = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSpeak = async () => {
    try {
      const response = await axios.post(
        'https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts',
        text,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Naver-Client-Id': '1hn7bnzmda',
            'X-Naver-Client-Secret': 'U4FlTsaV5abhlLU0nos97o3fzOvCfR0CIkC5bmdr',
          },
          responseType: 'blob',
        }
      );

      const audioUrl = URL.createObjectURL(response.data);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error('Error speaking text:', error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleSpeak}>Speak</button>
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
}

