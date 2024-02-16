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
        <Link to="/">
          <img src={logoimg} />
        </Link>
      </span>
      <span id={styles.search}>
        <Search></Search>
      </span>
      <span id={styles.post}>
        <Link to="/write">
          <button>내 메컵 공유</button>
        </Link>
      </span>
      <span className={styles.icon}>
        <span id={styles.chat}>
          <button>
            <img src={chatimg} />
          </button>
        </span>
        <span id={styles.notice}>
          <button>
            <img src={bellimg} />
          </button>
        </span>
        <span id={styles.profile}>
          <Link to="/login">
            <img src={profile} />
          </Link>
        </span>
      </span>
    </div>
  );
}
