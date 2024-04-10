import * as S from './style';
import { useNavigate } from "react-router-dom";
import btnHome from '../../assets/btn-home.png';
import {
  background,
  character,
  cloudLeft,
  cloudRight,
  bg,
  story,
} from '../../assets/Guide';

export const GuideFirst
 = () => {
  const navigate = useNavigate();

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCharacter = () => {
    navigate("/character");
  };

  // const onClickStage = () => {
  //   navigate("/story");
  // };

  // const onClickStory = () => {
  //   navigate("/story/create");
  // };

  return (
    <S.Container> 
      <S.Bg src={bg} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body>
        <S.Clouds>
          <S.Cloud src={cloudLeft} alt="구름다리왼쪽" />
          <S.Cloud src={cloudRight} alt="구름다리오른쪽" />
        </S.Clouds>
        <S.MenuContainer>
          <S.Menu
            src={character} 
            alt="주인공 만들기" 
            onClick={onClickCharacter}
            style={{ 
              cursor: "pointer",
              filter: "drop-shadow(0px 4px 45px #0395FF)"
            }}
          />
          <S.MenuCenter 
            src={background} 
            alt="배경 정하기" 
            /* onClick={onClickStage} */
          />
          <S.Menu
            src={story} 
            alt="동화 짓기" 
            /* onClick={onClickStory} */
          />
        </S.MenuContainer>
      </S.Body>
    </S.Container>
  )
}