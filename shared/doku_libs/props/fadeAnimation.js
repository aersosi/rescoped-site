import {keyframes} from "@emotion/react";

export const fadeProps = {
    duration: 650,
    damping: 0.25,
    cascade: true,
    fraction: 0,
    triggerOnce: true
}

export const fadeUpProps = {
    direction: "up",
    duration: 650,
    damping: 0.25,
    cascade: true,
    fraction: 0,
    triggerOnce: true
}

export const customKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  75% {
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;
