import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BoardWrite.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "../header/Header";
import photoimg from "./Group 9.png";
import Modal from "../modal/modal";
import Delete from "./delete.png";
import Basket from "./basket.png";
import MentoCalendar from "../calendarMento/MentoCalendar";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    brandName: "",
    productName: "",
    image: null,
    brandProducts: [],
  });
  const [file, setFile] = useState(null);
  const postId = localStorage.getItem("postId");
  const params = useParams();
  const id = params.happy;

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { title, brandName, productName, image, brandProducts } = board;

  const onChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };
  const saveFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const onAddInfo = () => {
    if (productName && brandName) {
      setBoard((prevBoard) => ({
        ...prevBoard,
        brandProducts: [
          ...prevBoard.brandProducts,
          { brandName: brandName, productName: productName },
        ],
        productName: "",
        brandName: "",
      }));
    }
  };

  const onDeleteInfo = (index) => {
    setBoard((prevBoard) => {
      const updatedInfo = [...prevBoard.brandProducts];
      updatedInfo.splice(index, 1);

      return {
        ...prevBoard,
        brandProducts: updatedInfo,
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

  const submitPost = (e) => {
    e.preventDefault();
    // console.log("aaa");
    openModal();
    const formData = new FormData();
    // console.log("Submit Post Called!");
    // console.log({ file, title, list });
    formData.append("file", board.image);
    formData.append(
      "json",
      JSON.stringify({
        title: board.title,
        brandProducts: board.brandProducts,
      })
    );

    fetch("https://api.zionhann.shop/app/makeup/posts", {
      method: "POST",
      body: formData,
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.ok);
        if (!!json.ok) {
          window.location.reload();
        }
      });
  }; //폼 제출을 처리하는 submitPost 함수, 기본 제출 동작 막고 파일과 포스트 데이터 추가. 그리고 fetch사용하여 서버에 POST 요청
  const [recapData, setRecapData] = useState({});
  useEffect(() => {
    //처음 한번만 실행하기 위해
    fetch(`https://api.zionhann.shop/app/makeup/posts${postId}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ qid: id }),
    })
      .then((data) => data.json())
      .then((json) => setRecapData(json));
  }, [postId, id]);

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
    brandProducts.length === 0 && !productName ? (
      <p>
        <div className={styles.feed}>
          <img src={Basket} alt="basketimg"></img>
        </div>
        <br />
        <div className={styles.text}>작성된 피드가 없습니다.</div>
      </p>
    ) : null;

  if (isCalendarOpen) {
    return <MentoCalendar setIsCalendarOpen={setIsCalendarOpen} />;
  }

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={} />
      </Routes> */}
      <Header />
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
            <div className={styles.productName}>
              <input
                className={styles.brand}
                name="brandName"
                value={brandName}
                onChange={onChange}
                placeholder="브랜드명"
              />
              <input
                className={styles.product}
                name="productName"
                value={productName}
                onChange={onChange}
                placeholder="화장품명"
              />
              <button className={styles.addBtn} onClick={onAddInfo}>
                추가
              </button>
              <ul className={styles.scroll}>
                {brandProducts.map((info, index) => (
                  <div className={styles.Btn} key={index}>
                    <p className={styles.inputBrand}>{info.brandName}</p>
                    <p className={styles.intputProduct}>{info.productName}</p>
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
                <button type="submit" onClick={submitPost}>
                  작성 완료
                </button>

                <Modal open={modalOpen} setOpen={setModalOpen}>
                  피드 작성이 완료되었습니다!
                </Modal>
              </React.Fragment>
            </div>
            <div className={styles.date}>
              <button onClick={() => setIsCalendarOpen(true)}>날짜 설정</button>
            </div>
            {/* 날짜 설정 페이지로 이동하기 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
