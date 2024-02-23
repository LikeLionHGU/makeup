import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import heart from "./heart.png";

import Header from "../header/Header";

import styles from "./searchboard.module.css";

export default function SearchBoard() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { state } = useLocation();
  const { search } = state;
  console.log({ search });

  // const {search} = state;

  useEffect(() => {
    // API 호출
    fetch("https://api.zionhann.shop/app/makeup/posts/search?keyword=" + search)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, [search]);

  const handleContainerClick = (num) => {
    navigate("/UploadPost/" + num);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  // const search = ({ search }) => {
  //   {
  //     search !== "" &&
  //       filterResult
  //         .filter((search) => search !== null)
  //         .map((search) => (

  //             {search.postID}
  //              {search.imageUrl}
  //            {search.title}

  //         ));
  //   }
  // };

  if (!data) return <>loading...</>;

  return (
    <div className={styles.searchboard}>
      <Header search={search}></Header>
      {/* <h1>{search}</h1> */}
      <div className={styles.container}>
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex}>
            {[...Array(4)].map((_, rowIndex) => {
              const itemIndex = rowIndex * 4 + colIndex;
              const item = data[itemIndex];

              // const filterResult = data.filter((p) => {
              //   return (
              //     p.title
              //       .replace(" ", "")
              //       .toLocaleLowerCase()
              //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
              //     p.body
              //       .replace(" ", "")
              //       .toLocaleLowerCase()
              //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
              //     p.tag
              //       .replace(" ", "")
              //       .toLocaleLowerCase()
              //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
              //     p.nickname
              //       .replace(" ", "")
              //       .toLocaleLowerCase()
              //       .includes(search.toLocaleLowerCase().replace(" ", ""))
              //   );
              // });

              if (!item) return null;
              return (
                <div className={styles.bottom}>
                  {/* <h1>{search}</h1> */}
                  <div
                    key={item.photo_id}
                    className={styles.rect}
                    onClick={() => handleContainerClick(item.postId)}
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
