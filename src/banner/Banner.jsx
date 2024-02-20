import styles from "./Banner.module.css";
import Slider from "./Slider";

export default function Banner() {
  return (
    <div className={styles.banner}>
      {/* <div className={styles.rect}> */}
      <Slider></Slider>
      {/* </div> */}
    </div>
  );
}
