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
        {image ? null : (
          <span className={styles.button}>
            <input
              type="file"
              style={{ display: "none" }}
              ref={imageInput}
              onChange={handleImageChange}
            />
            <button onClick={onCickImageUpload}>
              <img alt="photo01" src={photoimg} />
            </button>
          </span>
        )}
        {image && (
          <span className={styles.photo}>
            <img
              src={image}
              alt="Uploaded"
              style={{
                maxWidth: "460px",
                maxHeight: "580px",
                borderRadius: "40px",
                marginTop: "25px",
                marginBottom: "25px",
                marginLeft: "25px",
              }}
            />
          </span>
        )}

        <span className={styles.title}>
          <textarea
            type="text"
            name="title"
            value={title}
            cols="20"
            rows="10"
            onChange={onChange}
            placeholder="제목 입력하기"
          />
        </span>
        <span className={styles.contents}>
          <textarea
            name="contents"
            cols="50"
            rows="10"
            value={contents}
            onChange={onChange}
            placeholder="사용한 화장품 리스트를 알려주세요."
          ></textarea>
        </span>

        <div className={styles.buttonContainer}>
          <div className={styles.line}></div>
          <span className={styles.save}>
            <button onClick={saveBoard}>작성 완료</button>
          </span>
          <span className={styles.date}>
            <button onClick={saveBoard}>날짜 설정</button>
          </span>
          {/* 날짜 설정 페이지로 이동하기 */}
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
