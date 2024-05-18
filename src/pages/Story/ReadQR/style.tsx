import { keyframes, styled } from "styled-components";
import bgTree from "../../../assets/bgTree.png";
import bgCloud from "../../../assets/bgCloud.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7ffd9;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 3rem;
  z-index: 10;
  bottom: 0;
  background-color: #9CE6FF;
  background-image: url(${bgCloud});
`;

export const Check = styled.img`
  position: absolute;
  z-index: 11;
  width: 4rem;
  height: auto;
  cursor: pointer;
`;

export const CheckL = styled.img`
  position: absolute;
  z-index: 11;
  width: 4rem;
  height: auto;
  transform: scaleX(-1);
  cursor: pointer;
`;

export const CheckG = styled.img`
  position: absolute;
  z-index: 11;
  right: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  filter: drop-shadow(0px 4px 40px rgba(255, 255, 255, 0.8));
  cursor: pointer;
`;

// 캐러우셀

export const StyledApp = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background-color: #9CE6FF; */
  background-image: url(${bgTree});
  font-family: "BMJUA";
`;

export const SpeakerBtn = styled.img`
  width: 4.5rem;
  height: auto;
  position: absolute;
  z-index: 2;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

export const BookText = styled.img`
  width: 16rem;
  height: auto;
  margin-bottom: 3rem;
  cursor: pointer;
`;
      
export const BtnShare = styled.img`
  width: 20rem;
  height: auto;
  margin-top: 3rem;    
  cursor: pointer;
  &:active {
    width: 21.2rem;
    margin-top: 2.6rem;
  }              
`;

export const StyledCarousel = styled.div`
  position: relative;
  width: 28rem;
  height: 40rem;
  perspective: 500px;
  transform-style: preserve-3d;

  .card-container {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: 
      rotateY(calc(var(--offset) * 50deg)) 
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
  }

  .nav {
    color: white;
    font-size: 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;

    &.left {
      transform: translateX(-100%) translateY(-50%);
    }

    &.right {
      right: 0;
      transform: translateX(100%) translateY(-50%);
    }
  }
`;

export const StyledCard = styled.div`
  width: 28rem;
  height: 40rem;
  box-sizing: border-box;
  background-color: hsl(60deg, 40%, calc(100% - var(--abs-offset) * 75%));
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContextContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: 28rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: #F7FFD9;
  animation: ${fadeIn} 0.7s linear forwards;
`;

export const CardContext = styled.div`
  width: 20rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  background-color: #F7FFD9;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardPattern = styled.img`
  position: fixed;
  z-index: 4;
  width: 4.5rem;
  height: 4.5rem;
  top: 1.8rem;
  left: 1.7rem;
`;

export const CardPatternB = styled.img`
  position: fixed;
  z-index: 4;
  width: 4.5rem;
  height: 4.5rem;
  bottom: 1.8rem;
  right: 1.7rem;
  rotate: 180deg;
`;

export const CardDiv = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

export const CardDivText = styled.p`
  width: 100%;
  height: auto;
  font-size: 1.7rem;
  color: #1f2937;
  transition: all 0.3s ease-out;
  opacity: var(--active);
`;

export const CardImg = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

/* QR */

export const QRContainer = styled.div`
  width: 20rem;
  height: 25rem;
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* book style */

export const BookContainer = styled.div`
  width: 20rem;
  height: 25rem;
  margin-top: 7rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: -0.4rem 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 25;
`;

export const BookData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 26;
  font-family: "BMJUA";
  font-size: 1.5rem;
  text-align: center;
  color: #000;
`;

export const BookTitle = styled.div`
  width: 90%;
  margin-top: 20%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.65rem;
`;

export const BookAuthor = styled.div`
  width: 90%;
  height: 10%;
  font-size: 1.1rem;
`;

export const BookBg = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ReadBtn = styled.img`
  width: 20rem;
  height: auto;
  cursor: pointer;
`;

export const Logo = styled.img`
  position: absolute;
  z-index: 30;
  width: 13rem;
  height: auto;
  cursor: pointer;
  top: 3dvh;
`;