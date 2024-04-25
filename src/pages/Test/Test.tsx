import { useNavigate } from "react-router-dom";

export const Test = () => {
  const navigate = useNavigate();

  const onClickRoute = () => {
    navigate(`/story/test/2`);
  }

  return (
    <div>
      <button onClick={onClickRoute}>다음 페이지</button>
      <p>페이지 넘버: 1페이지</p>
    </div>
  );
};
