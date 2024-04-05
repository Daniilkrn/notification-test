import React from "react";
import "./styles/main.scss";
import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { setModal } from "./store/reducers/modalSlice.ts";
import Modal from "./components/Modal.tsx";
import Loader from "./components/Loader.jsx";

const App: React.FC = () => {
  const [status, setStatus] = React.useState<string>();
  const [text, setText] = React.useState<string>();
  const [label, setLabel] = React.useState<string>();

  const [loader, setLoader] = React.useState<boolean | null>(null);

  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.modal.open);

  const simulateServer = () => {
    const promiseThen = new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        setLoader(false);
        return resolve("success");
      }
      const timeOut = setTimeout(() => {
        reject("Потеря интернет соединения");
        return clearTimeout(timeOut);
      }, 1000);
    });

    promiseThen
      .then((val) => {
        setStatus("success");
        setText("Изменения успешно сохранены");
        setLabel("Успешно");
      })
      .catch((err) => {
        setStatus("error");
        setLabel("Изменения не сохранены");
        setText(err);
      })
      .finally(() => {
        dispatch(setModal(true));
        setLoader(false);
      });
  };

  return (
    <div className="app-wrapper">
      <button
        className="fetch-btn main-btn"
        onClick={() => {
          if (!modalOpen) {
            setLoader(true);
            simulateServer();
          }
        }}
      >
        Запрос
      </button>
      {loader && !modalOpen ? <Loader /> : null}
      {modalOpen ? (
        <Modal status={status} label={label} text={text}></Modal>
      ) : null}
    </div>
  );
};

export default App;
