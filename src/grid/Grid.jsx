import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Grid.module.css";
import dummy from "./data.json";

function Grid() {
  const navigate = useNavigate();
  // const memberId = localStorage.getItem("memberID");
  const [data, setData] = useState(dummy.data);

  const handleContainerClick = (num) => {
    navigate("/addprofile/" + num);
  };

  if (!data) return <>loading...</>;

  return (
    <div>
      <h2 className={styles.text}>최근에 올라온 피드</h2>
      <div className={styles.container}>
        {[...Array(4)].map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {[...Array(4)].map((_, colIndex) => {
              const itemIndex = rowIndex * 4 + colIndex;
              const item = data[itemIndex];
              if (!item) return null; // In case data is less than 16 items
              return (
                <div
                  key={item.photo_id}
                  className={styles.rect}
                  onClick={() => handleContainerClick(item.photo_id)}
                  style={{ backgroundImage: `url(${item.photo_url})` }}
                >
                  <div className={styles.hoverText}>{item.text}</div>
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
