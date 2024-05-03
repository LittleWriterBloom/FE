import { useMemo } from "react";
import styled from "styled-components";
import * as S from "./style";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { btnArrowR, btnArrowL } from "../../assets/Home";

const SlideWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  .slick-prev::after,
  .slick-next::before {
    display: none;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

export default function Slick({
  children,
  className,
  autoplay = true,
  speed = 1000,
  loop = true,
}: sliderProps) {
  const SlickButtonFix: React.FC<{
    currentSlide: number;
    slideCount: number;
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }> = ({ currentSlide, slideCount, children, ...props }) => (
    <ArrowWrapper {...props}>{children}</ArrowWrapper>
  );

  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 5000 : autoplay,
      //오른쪽 화살표
      nextArrow: (
        <SlickButtonFix currentSlide={0} slideCount={1}>
          <S.Arrows
            src={btnArrowR}
            alt="btnArrowR"
            style={{ right: "5vw", zIndex: "10" }}
          />
        </SlickButtonFix>
      ),
      //왼쪽 화살표
      prevArrow: (
        <SlickButtonFix currentSlide={0} slideCount={1}>
          <S.Arrows
            src={btnArrowL}
            alt="btnArrowL"
            style={{ left: "5vw", zIndex: "10" }}
          />
        </SlickButtonFix>
      ),
    }),
    [autoplay, loop, speed]
  );
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}
