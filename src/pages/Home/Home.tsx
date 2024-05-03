import * as S from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";
import {
  btnProfile,
  btnSettings,
  btnStoryMake,
  bgStoryMake,
  bgMyCharacters,
  btnMyCharacters,
  btnMyStories,
  bgMyStories,
} from "../../assets/Home";
import Slick from "./Slick";

export const Home = () => {
  const [accessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();

  const onClickSettings = () => {
    navigate("/test");
  };

  const onClickStoryMake = () => {
    if (accessToken) {
      navigate("/character");
    } else {
      navigate("/login");
    }
  };

  const onClickMyChars = () => {
    if (accessToken) {
      navigate("/character/mycharacters");
    } else {
      navigate("/login");
    }
  };

  const onClickMyStories = () => {
    if (accessToken) {
      navigate("/mystories");
    } else {
      navigate("/login");
    }
  };

  const onClickProfile = () => {
    if (accessToken) {
      navigate("/logout");
    } else {
      navigate("/login");
    }
  };

  const items = [
    {
      item: bgStoryMake,
      name: "동화만들기",
      button: btnStoryMake,
    },
    {
      item: bgMyStories,
      name: "등장인물",
      button: btnMyStories,
    },
    {
      item: bgMyCharacters,
      name: "동화기록",
      button: btnMyCharacters,
    },
  ];
  console.log(accessToken);
  return (
    <S.Container>
      <S.Header>
        <S.Profile src={btnProfile} alt="내 프로필" onClick={onClickProfile} />
        <S.Logo src={logo} alt="꼬마작가" />
        <S.Settings src={btnSettings} alt="설정" onClick={onClickSettings} />
      </S.Header>
      <S.Body>
        <S.SlickWrapper>
          <Slick>
            {items.map((item, index) => (
              <S.SliderItem key={index}>
                <S.StoryMakeBG src={item.item} alt={item.name} />
                <S.StoryMakeBtn
                  src={item.button}
                  alt={item.name}
                  onClick={() => {
                    switch (index) {
                      case 0:
                        onClickStoryMake();
                        break;
                      case 1:
                        onClickMyStories();
                        break;
                      case 2:
                        onClickMyChars();
                        break;
                      default:
                        break;
                    }
                  }}
                />
              </S.SliderItem>
            ))}
          </Slick>
        </S.SlickWrapper>
      </S.Body>
    </S.Container>
  );
};
