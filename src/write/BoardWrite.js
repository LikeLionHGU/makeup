import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BoardWrite.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import photoimg from "./Group 9.png";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    createdBy: "",
    contents: "",
    image: null, // 이미지 파일을 담을 상태 추가
  });

  const { title, contents, image } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = () => {
    alert("등록되었습니다.");
    navigate("/board");
  };

  const imageInput = useRef();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBoard({
          ...board,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>

      <div className={styles.rect}>
        <div className={styles.left}>
          {image ? (
            <div className={styles.photo}>
              <img src={image} alt="Uploaded" />
            </div>
          ) : (
            <div className={styles.button}>
              <input
                type="file"
                style={{ display: "none" }}
                ref={imageInput}
                onChange={handleImageChange}
              />
              <button onClick={onCickImageUpload}>
                <img alt="photo01" src={photoimg} />
              </button>
            </div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.titlecontent}>
            <div className={styles.title}>
              <textarea
                type="text"
                name="title"
                value={title}
                rows="2"
                onChange={onChange}
                placeholder="제목 입력하기"
              />
            </div>
            <div className={styles.contents}>
              <textarea
                name="contents"
                cols="50"
                rows="20"
                value={contents}
                onChange={onChange}
                placeholder="사용한 화장품 리스트를 알려주세요."
              ></textarea>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.line}></div>
            <div className={styles.save}>
              <button onClick={saveBoard}>작성 완료</button>
            </div>
            <div className={styles.date}>
              <button onClick={saveBoard}>날짜 설정</button>
            </div>
            {/* 날짜 설정 페이지로 이동하기 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
