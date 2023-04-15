import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt="" width="100" height="150" />
      </div>
    </div>
  );
};

export default Featured;
