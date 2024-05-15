import * as S from "./style";
import { btnSearch, bubble, dictBG1, dictBG2, inputSearch } from "../../assets/Story/Dict";
import { SpeechToText } from "../SpeechToText/SpeechToText";
import { useEffect, useState } from "react";
import { btnX, speakerT } from "../../assets";
import { TTS } from "../TTS/TTS";
import apis from "../../apis/apis";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";

interface DictDataProps {
  context: string;
  question: string;
}

export const Dictionary = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void, context: string }) => {
  const [act] = useAtom(accessTokenAtom);
  const [dictQuest, setDictQuest] = useState("");
  const [listening, setListening] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [context, setContext] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setContext(context);
  }, []);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setDictQuest(result); // 입력된 음성 결과로 이름 업데이트
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDictQuest(e.target.value);
  };

  const closeDict = () => {
    closeModal();
  };

  const onClickSearch = () => {
    postDict(dictData);
  };

  const dictData = {
    context: context,
    question: dictQuest
  }

  const postDict = async (dictData: DictDataProps) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post(
          "/books/builder/dictionary",
          dictData,
          config
        );
        console.log(res.data);
        setAnswer(res.data.data[0]);
        setIsSearched(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      {isOpen && (
        <S.ModalContainer>
          <SpeechToText
            listening={listening}
            startListening={startListening}
            stopListening={stopListening}
            onSpeechResult={handleSpeechResult}
          />
          {isSearched ? (
            <S.ModalWrapper>
              <S.BtnX src={btnX} alt="종료하기" onClick={closeDict} />
              <S.ModalBg src={dictBG2} alt="말풍선" />
              <S.ModalBubble>
                <S.ModalBubbleBg src={bubble} alt="말풍선배경" />
                <S.ModalBubbleContent>
                  <S.ModalBubbleQuest>
                    {dictQuest}
                    <S.SpeakerBtn src={speakerT} alt="스피커(활성화)" />
                  </S.ModalBubbleQuest>
                  <S.ModalBubbleTextBox>
                    <TTS text={answer} speaker="ngaram" />
                    <S.ModalBubbleText>{answer}</S.ModalBubbleText>
                  </S.ModalBubbleTextBox>
                </S.ModalBubbleContent>
              </S.ModalBubble>
            </S.ModalWrapper>
          ) : (
            <S.ModalWrapper>
              <TTS text="책책이에게 모르는 단어를 질문해보세요." speaker="ngaram" />
              <S.BtnX src={btnX} alt="종료하기" onClick={closeDict} />
              <S.ModalBg src={dictBG1} alt="말풍선" />
              <S.ModalSearch>
                <S.ModalSearchBg src={inputSearch} alt="검색창" />
                <S.ModalSearchBtn src={btnSearch} alt="검색버튼" onClick={onClickSearch} />
                <S.ModalSearchInput
                  onChange={handleInput}
                  type="name"
                  placeholder=""
                  value={dictQuest}
                />
              </S.ModalSearch>
            </S.ModalWrapper>
          )}
        </S.ModalContainer>
      )}
    </>
  );
};
