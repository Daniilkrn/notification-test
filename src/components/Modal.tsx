import React from "react";
import '../styles/modal.scss';
import '../styles/media.scss';
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import ProgressBar from "./ProgressBar.tsx";
import { setPauseBar } from "../store/reducers/progressBarSlice.ts";

interface NotifyProps {
  status?: string,
  label?: string,
  text?: string,
}

const Modal: React.FC<NotifyProps> = ({ status, label, text }) => {

  const modalOpen = useAppSelector((state) => state.modal.open);
  
  const dispatch = useAppDispatch();

  const stopProgressHandler = () => {
    dispatch(setPauseBar(true))
  }

  const continueProgressHandler = () => {
    dispatch(setPauseBar(false))
  }

  return (
    <div className={modalOpen ? "notify-open" : "notify"} onMouseEnter={stopProgressHandler} onMouseLeave={continueProgressHandler}>
      <div className="notify-container">
        <div className="notify-container__status">
          {status === "error" ? (
            <svg 
              className="error-svg svg-notify"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#EF373E" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0995 16.5466L12.6449 9.09204L9.09117 12.6458L16.5458 20.1004L9.28971 27.3564L12.8435 30.9102L20.0995 23.6542L27.3556 30.9102L30.9093 27.3565L23.6533 20.1004L31.1079 12.6458L27.5541 9.09204L20.0995 16.5466Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="success-svg svg-notify"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#638E58" />
              <circle cx="20" cy="20" r="20" fill="#638E58" />
              <path
                d="M16.6667 28.6667L8.33333 17.5253L11.3408 14.6883L16.8546 22.2277L29.0727 10L31.9444 13.3473L16.6667 28.6667Z"
                fill="#F5F5F5"
              />
            </svg>
          )}
        </div>
        <div className="notify-container__content">
          <div className="notify-container__content-info">
            <ul className="notify-list">
              <li className="notify-list__label">{label}</li>
              <li className="notify-list__text">{text}</li>
            </ul>
          </div>
          <ProgressBar/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
