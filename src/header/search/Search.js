import { useState } from "react";
import dummy from "./dummydata.json";

import ehe from "../image/ehe.png";

import styles from "./Search.module.css";

import { Link, useNavigate } from "react-router-dom";

export default function Search({ search: prevSearch }) {
  const [search, setSearch] = useState(prevSearch);
  const [member] = useState(dummy.data);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log({ search });
      navigate("/searchboard", { state: { search } });
    }
  };

  return (
    <div>
      <div className={styles.content}>
        <span className={styles.input}>
          <input
            type="text"
            value={search}
            onChange={onChange}
            onKeyDown={handleKeyPress}
            placeholder="화장을 알지 못하는 그대들에게...🩷"
          ></input>
          <span className={styles.image}>
            <img src={ehe} />
          </span>
        </span>
      </div>
    </div>
  );
}
