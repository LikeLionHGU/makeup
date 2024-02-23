import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import Header from "../header/Header";
import styles from "./UploadPost.module.css";

function UploadPost() {
  const [data, setData] = useState(null);
  const params = useParams();
  const id = params.postId;
  const navigate = useNavigate();
  useEffect(() => {
    // API 호출
    fetch(`https://api.zionhann.shop/app/makeup/posts/${id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
      });
  }, [id]);

  console.log(data);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <div className={styles.rect}>
        <div className={styles.left}>
          <img className={styles.photo} src={data.imageUrl} alt="사진"></img>
        </div>
        <div className={styles.right}>
          <div>
            <div className={styles.title}>{data.title}</div>
            {data.brandProducts.map((item) => (
              <div key={item.brandName}>
                <div className={styles.brandProduct}>
                  <div className={styles.brandName}>{item.brandName}</div>
                  <div className={styles.productName}>{item.productName}</div>
                </div>
                <div className={styles.line}></div>
              </div>
            ))}
          </div>

          {/* <div className={styles.brandName2}>CLIO(클리오) </div>
          <div className={styles.productName2}>
            킬브로우 컬러 브로우 래커_01 내추럴 브라운
          </div>
          <div className={styles.line2}></div>
          <div className={styles.brandName3}>Fillimilli(필리밀리) </div>
          <div className={styles.productName3}>3단 픽싱뷰러</div>
          <div className={styles.line3}></div>
          <div className={styles.brandName4}>Peripera(페리페라) </div>
          <div className={styles.productName4}>잉크 블랙 카라_02블랙</div>
          <div className={styles.line4}></div> */}
          <button
            className={styles.button}
            onClick={() => navigate("./calendar")}
          >
            멘토링 신청
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadPost;
