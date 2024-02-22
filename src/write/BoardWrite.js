import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BoardWrite.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import photoimg from "./Group 9.png";
import Modal from "../modal/modal";
import Delete from "./delete.png";
import Basket from "./basket.png";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    createdBy: "",
    contents: "",
    image: null,
    additionalInfo: [],
  });

  const { title, createdBy, contents, image, additionalInfo } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const onAddInfo = () => {
    if (contents && createdBy) {
      setBoard((prevBoard) => ({
        ...prevBoard,
        additionalInfo: [
          ...prevBoard.additionalInfo,
          { brand: createdBy, product: contents },
        ],
        contents: "",
        createdBy: "",
      }));
    }
  };

  const onDeleteInfo = (index) => {
    setBoard((prevBoard) => {
      const updatedInfo = [...prevBoard.additionalInfo];
      updatedInfo.splice(index, 1);

      return {
        ...prevBoard,
        additionalInfo: updatedInfo,
      };
    });
  };

  const saveBoard = () => {
    navigate("/calendarmento");
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

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const noFeedMessage =
    additionalInfo.length === 0 && !contents ? (
      <p>
        <div className={styles.feed}>
          <img src={Basket} alt="basketimg"></img>
        </div>
        <br />
        <div className={styles.text}>작성된 피드가 없습니다.</div>
      </p>
    ) : null;

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
                placeholder="제목을 입력해주세요. "
              />
            </div>
            <div className={styles.contents}>
              <input
                className={styles.brand}
                name="createdBy"
                value={createdBy}
                onChange={onChange}
                placeholder="브랜드명"
              />
              <input
                className={styles.product}
                name="contents"
                value={contents}
                onChange={onChange}
                placeholder="화장품명"
              />
              <button className={styles.addBtn} onClick={onAddInfo}>
                추가
              </button>
              <ul className={styles.scroll}>
                {additionalInfo.map((info, index) => (
                  <div className={styles.Btn} key={index}>
                    <p className={styles.inputBrand}>{info.brand}</p>
                    <p className={styles.intputProduct}>{info.product}</p>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => onDeleteInfo(index)}
                    >
                      <img src={Delete} alt="delteBtn"></img>
                    </button>
                    <div className={styles.line}></div>
                  </div>
                ))}
              </ul>
              <div className={styles.feed}>{noFeedMessage}</div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.save}>
              <React.Fragment>
                <button onClick={openModal}>작성 완료</button>

                <Modal open={modalOpen} close={closeModal}>
                  피드 작성이 완료되었습니다!
                </Modal>
              </React.Fragment>
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
