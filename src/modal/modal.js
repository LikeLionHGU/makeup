import styles from "./Modal.module.css";
import subimg from "./Subtract.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  const { open } = props;

  const [formData, setFormData] = useState(new FormData());
  const [postTags, setPostTags] = useState({});
  const [postText, setPostText] = useState("");

  const onChange = ({ target }) => {
    const files = target.files;

    Object.entries(files).forEach(([i, file]) => {
      formData.append("images", file);
    });
  };

  const registerPost = async () => {
    formData.set("topic", postTags.topic);
    formData.set("pet", postTags.pet);
    formData.set("text", postText);
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/posts/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/board");
      } else {
        throw new Error("게시물 저장에 실패했습니다.");
      }
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
            <button className={styles.close} onClick={registerPost}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
