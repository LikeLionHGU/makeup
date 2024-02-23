import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import heart from "./heart.png";

import Header from "../header/Header";

import styles from "./searchboard.module.css";

export default function SearchBoard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { state } = useLocation();
  // const {search} = state;

  useEffect(() => {
    // API 호출
    fetch("https://api.zionhann.shop/app/makeup/posts/search?keyword=")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  const handleContainerClick = (num) => {
    navigate("/post/" + num);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  // const search = ({ state }) => {
  //   {
  //     state !== "" &&
  //       filterResult
  //         .filter((state) => state !== null)
  //         .map((state) => (

  //             {state.postID}
  //              {state.imageUrl}
  //            {state.title}

  //         ));
  //   }
  // };

  if (data.length === 0) return <>loading...</>;

  return (
    <div className={styles.searchboard}>
      <Header></Header>
      <div className={styles.container}>
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex}>
            {[...Array(4)].map((_, rowIndex) => {
              const itemIndex = rowIndex * 4 + colIndex;
              const item = data[itemIndex];
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
