import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TestParams = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(2);
  const params = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("페이지 넘버", pageNum);
    setCount(0);
  });

  const onClickRoute = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
    navigate(`/story/test/${pageNum + 1}`);
  };

  const onCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClickRoute}>파라미터 페이지</button>
      <p>페이지 넘버: {params.testId}</p>
      <p>pageNum : {pageNum}</p>
      <button onClick={onCount}>증가</button>
      <p>{count}</p>
      {pageNum === 3 ? (
        <button>끝내기</button>
      ) : (
        <></>
      )}
    </div>
  );
};
