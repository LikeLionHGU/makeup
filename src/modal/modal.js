import styles from "./Modal.module.css";
import subimg from "./Subtract.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BoardList from "../board/BoardList";

const Modal = (props) => {
  const navigate = useNavigate();
  const { open } = props;

  const saveBoard = async () => {
    const title = "새 게시물 제목";
    const content = "게시물 내용";
    const userId = 1;
    const image = "이미지 파일 데이터 (멀티파트 형식)";

    try {
      const response = await axios.post("http://localhost:8080/posts/", {
        title,
        content,
        userId,
        image,
      });
      navigate("/board");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}
    >
      {open ? (
        <section>
          <header>
            <img src={subimg} alt="sub" />
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={styles.close} onClick={saveBoard}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
