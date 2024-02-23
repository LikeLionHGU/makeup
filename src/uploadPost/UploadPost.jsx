import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "../header/Header";
import styles from "./UploadPost.module.css";
import go from "./go.jpg";
function UploadPost() {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.postId;

  useEffect(() => {
    // API 호출
    fetch(`https://api.zionhann.shop/app/makeup/posts/{postId}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <div className={styles.rect}>
        <div className={styles.left}>
          {" "}
          <img className={styles.photo} src={go} alt="goimg"></img>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>한번에 취뽀하고 싶을 때</div>

          <div className={styles.brandName}>thim(띰)</div>
          <div className={styles.productName}>
            아티스트 터치 브로우 듀오_코코아 브라운
          </div>
          <div className={styles.line}></div>

          <div className={styles.brandName2}>CLIO(클리오) </div>
          <div className={styles.productName2}>
            킬브로우 컬러 브로우 래커_01 내추럴 브라운
          </div>
          <div className={styles.line2}></div>
          <div className={styles.brandName3}>Fillimilli(필리밀리) </div>
          <div className={styles.productName3}>3단 픽싱뷰러</div>
          <div className={styles.line3}></div>
          <div className={styles.brandName4}>Peripera(페리페라) </div>
          <div className={styles.productName4}>잉크 블랙 카라_02블랙</div>
          <div className={styles.line4}></div>
          <button className={styles.button}>멘토링 신청</button>
        </div>
      </div>
    </div>
  );
}

export default UploadPost;
