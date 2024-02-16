import React from "react";
import styles from "./Modal.module.css";
import subimg from "./Subtract.png";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div
      className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}
    >
      {open ? (
        <section>
          <header>
            <img src={subimg} alt="sub" />
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={styles.close} onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
