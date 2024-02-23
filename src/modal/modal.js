import React, { useState } from "react";
import styles from "./Modal.module.css";
import subimg from "./Subtract.png";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const { open, setOpen } = props;
  const navigate = useNavigate();

  const closeModal = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div className={`${styles.modal} ${open ? styles.openModal : ""}`}>
      {open ? (
        <section>
          <header>
            <img src={subimg} alt="sub" />
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={styles.close} onClick={closeModal}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

const ParentComponent = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setOpen(true)}>작성 완료</button> */}
      <Modal open={open} setOpen={setOpen}>
        피드 작성이 완료되었습니다!{" "}
      </Modal>
    </div>
  );
};

export default ParentComponent;
