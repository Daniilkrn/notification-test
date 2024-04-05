import React, { useEffect, useState, useRef } from "react";
import "./../styles/progressBar.scss";
import { setModal } from "../store/reducers/modalSlice.ts";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks.ts";

const ProgressBar: React.FC = () => {
  const [filled, setFilled] = useState(0);
  const [percentCount, setPercent] = useState(0);
  
  const refWidthContainer = useRef<HTMLDivElement>(null);
  const refWidthBar = useRef<HTMLDivElement>(null);

  let remainingTime = 3;

  const dispatch = useDispatch();
  const pauseBar = useAppSelector((state) => state.bar.pause);
  let intervalBar: NodeJS.Timeout;

  const interval = () => {
    intervalBar = setInterval(
      () =>
        refWidthContainer.current &&
        setFilled(
          filled + refWidthContainer.current.clientWidth / remainingTime
        ),
      1000
    );
    setPercent(percentCount + 1);
    if (
      refWidthBar.current && refWidthContainer.current &&
      refWidthBar.current.clientWidth === remainingTime * refWidthContainer.current.clientWidth / remainingTime
    ) {
      dispatch(setModal(false));
    }
  };

  useEffect(() => {
    if(!pauseBar){
      interval();
    } 

    if(pauseBar){
      return
    }

    return () => clearInterval(intervalBar);
  
  }, [filled, pauseBar]);

  return (
    <div className="progress-bar" ref={refWidthContainer}>
      <div
        className="progress-bar__container"
        ref={refWidthBar}
        style={{
          width: `${filled}px`,
          transition: "0.7s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
