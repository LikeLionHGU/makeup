import Login from "./login/Login";
import BoardList from "./search/BoardList";
import Search from "./search/Search";
import { Link } from "react-router-dom";
import logoimg from "./image/logo.png";
import chatimg from "./image/chat.png";
import bellimg from "./image/bell.png";
import profile from "./image/profile.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>
        <img src={logoimg} />
      </span>
      <span id={styles.search}>
        <Search></Search>
      </span>
      <span id={styles.post}>
        <button>내 메컵 공유</button>
      </span>
      <span className={styles.icon}>
        <span id={styles.chat}>
          <img src={chatimg} />
        </span>
        <span id={styles.notice}>
          <img src={bellimg} />
        </span>
        <span id={styles.profile}>
          <img src={profile} />
        </span>
      </span>
      {/* <Link to="/login">
        <button>로그인</button>
      </Link> */}
    </div>
  );
}
