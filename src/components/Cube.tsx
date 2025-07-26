import styled from 'styled-components';
import { motion } from 'framer-motion';
const Card = () => {
  return (
    <StyledWrapper>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        viewport={{ once: true }}
        className="cube-container"
      >
        <div className="cube">
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cube-container {
    width: 200px;
    height: 200px;
    perspective: 800px;
    margin: 115px auto 50px;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate 15s infinite linear;
  }

  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    color: #eecd53;
    font-size: 18px;
    text-align: center;
    line-height: 200px;
    background: transparent;
    opacity: 0.9;
    border: 2px solid;
    border-image: linear-gradient(90deg, #eecd53 0%, #c2b26c 100%);
    box-shadow: 0 0 100px rgba(238, 205, 83, 0.6);
  }

  .front,
  .back,
  .right,
  .left,
  .top,
  .bottom {
    background-color: #eecd53;
    background-image: linear-gradient(160deg, #eecd53 0%, #c2b26c 100%);
  }

  .front {
    transform: translateZ(100px);
  }

  .back {
    transform: rotateY(180deg) translateZ(100px);
  }

  .right {
    transform: rotateY(90deg) translateZ(100px);
  }

  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }

  .top {
    transform: rotateX(90deg) translateZ(100px);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  .cube-container:hover .cube {
    animation-play-state: paused;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }

    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
`;

export default Card;
