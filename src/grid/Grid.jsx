import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Grid.module.css";
import heart from "./heart.png";

function Grid() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // API 호출
    fetch("https://api.zionhann.shop/app/makeup/posts/images")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  const handleContainerClick = (num) => {
    navigate("/post/" + num);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (data.length === 0) return <>loading...</>;

  return (
    <div>
      <div className={styles.title}>최근에 올라온 피드</div>
      <div className={styles.container}>
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex}>
            {[...Array(4)].map((_, rowIndex) => {
              const itemIndex = rowIndex * 4 + colIndex;
              const item = data[itemIndex];
              // console.log(data);
              // https://makeuplion.s3.ap-northeast-2.amazonaws.com/%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%93%A4/KakaoTalk_20240215_144310163_10.jpg
              // 1. CORS 문제 해결 하기. 확장프로그램 설치하는 것은 일시적인 겁니다
              // 2. image 주소만 받아오고 있음
              //    클릭을 했을 때 어디로 연결되어야하는지 알 수 있는 방법이 없음.
              //
              /*
                item = {
                  image_url: 지금 주소
                  어느 형식에 id,
                  좋아요 숫자도 있어야함.
                }

                배열로 문자열만 주는 것이 아니고
                object (자바: 객체)에 예쁘게 포장해서 보내주세요!!!
              */
              // item.image_url
              if (!item) return null;
              return (
                <div className={styles.bottom}>
                  <div
                    key={item.photo_id}
                    className={styles.rect}
                    onClick={() => handleContainerClick(item.photo_id)}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  >
                    <div className={styles.hoverText}>
                      {truncate(item.text, 12)}
                    </div>

                    <img
                      src={heart}
                      alt="heartimg"
                      className={styles.heart}
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
