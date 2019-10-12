import { Link } from "react-scroll";
import { LinkProps } from "react-scroll/modules/components/Link";

import styled from "@emotion/styled";

interface ScrollButtonProps extends LinkProps {
  color: string;
}

export default styled(Link)<ScrollButtonProps>`
  box-sizing: border-box;
  position: absolute;
  bottom: 8%;
  width: 30px;
  height: 50px;
  border: ${props => "2px solid " + props.color};
  border-radius: 50px;
  cursor: pointer;

  &::before {
    content: "";
    box-sizing: inherit;
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: ${props => props.color};
    border-radius: 100%;
    animation: scroll 2s infinite;
  }

  &::after {
    content: "Scroll";
    position: absolute;
    top: 130%;
    left: -25%;
    transform: translateX("-50%");
    transition: opacity 250ms ease-in;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  @keyframes scroll {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
