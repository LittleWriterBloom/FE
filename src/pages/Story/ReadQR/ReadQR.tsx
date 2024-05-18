import * as S from "./style";
import { useParams } from "react-router-dom";
import { checkW } from "../../../assets/Story";
import React, { useEffect, useState } from "react";
import apis from "../../../apis/apis";
import QRCode from "qrcode.react";

export const ReadQR = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isTextOpen, setIsTextOpen] = useState(false);

  const [bgArray, setBgArray] = useState<string[]>([]);
  const [contextArray, setContextArray] = useState<string[]>([]);

  useEffect(() => {
    getBookTotalData();
    console.log(uuid);
  }, []);

  const getBookTotalData = async () => {
    try {
      const res = await apis.get(`/books/board/${uuid}`);
      console.log(res.data.data[0].book.pages);
      const bookPages = res.data.data[0].book.pages;
      const bookL = bookPages.length;
      const newBgArray = [];
      const newContextArray = [];
      for (let i = 0; i < bookL; i++) {
        newBgArray.push(bookPages[i].coloredImageUrl);
        newContextArray.push(bookPages[i].context);
      }
      setBgArray(newBgArray);
      setContextArray(newContextArray);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("북아이디: ", uuid);

  const onClickCard = () => {
    setIsTextOpen((prevState) => !prevState);
  };

  const onClickQR = () => {
    setIsBookOpen(true);
  };

  /* 캐러우셀 */

  const MAX_VISIBILITY = 3;

  interface CardProps {
    image: string;
    content: string;
  }

  const Card: React.FC<CardProps> = ({ content, image }) => (
    <S.StyledCard onClick={onClickCard}>
      {isTextOpen && (
        <S.CardContext>
          {content.split(".").map((sentence, index, array) => (
            <S.CardDiv key={index}>
              <p>
                {sentence.trim()}
                {index < array.length - 1 && "."}
              </p>
            </S.CardDiv>
          ))}
        </S.CardContext>
      )}
      {!isTextOpen && <img src={image} alt="스토리 이미지" />}
    </S.StyledCard>
  );

  const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [active, setActive] = useState(0); // Change initial active state to 0
    const count = React.Children.count(children);

    return (
      <S.StyledCarousel>
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            <S.CheckL src={checkW} alt="다음으로(비활성화)" />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            style={
              {
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                pointerEvents: active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                display:
                  Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            <S.Check src={checkW} alt="다음으로(비활성화)" />
          </button>
        )}
      </S.StyledCarousel>
    );
  };

  return (
    <S.Container>
      {isBookOpen ? (
        <S.StyledApp>
          <Carousel>
            {bgArray.map((bg, i) => (
              <Card key={i} content={contextArray[i]} image={bg} />
            ))}
          </Carousel>
        </S.StyledApp>
      ) : (
        <S.QRContainer onClick={onClickQR}>
          <QRCode
            value={`http://littlewriter.netlify.app/#/readai/${uuid}`}
            style={{ width: "70%", height: "auto", marginLeft: "2rem" }}
          />
        </S.QRContainer>
      )}
    </S.Container>
  );
};
