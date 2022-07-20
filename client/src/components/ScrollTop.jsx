import React, { useEffect, useState, useCallback } from "react";
import { Iconstotop } from "../styles/svgIcon";
import styled from "styled-components";
import _ from "lodash";
const ScrollTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);
  const handleFollow = useCallback(
    _.throttle(() => {
      setScrollY(window.scrollY);
    }, 150),
    [btnStatus]
  );

  const watch = useCallback(() => {
    window.addEventListener("scroll", handleFollow);
  }, [btnStatus]);

  useEffect(() => {
    if (scrollY > 200) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }, [scrollY]);

  useEffect(() => {
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };
  return (
    <ToTopDiv btnStatus={btnStatus} onClick={handleTop}>
      <Iconstotop />
    </ToTopDiv>
  );
};

export default ScrollTop;

const ToTopDiv = styled.div`
  position: fixed;
  bottom: 5%;
  right: 10%;
  z-index: 3;
  opacity: ${({ btnStatus }) => (btnStatus ? 1 : 0)};
  transition: opacity 0.3s ease;
`;
