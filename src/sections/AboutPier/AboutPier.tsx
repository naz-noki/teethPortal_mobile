import styles from "@/sections/AboutPier/AboutPier.module.css";
import { FC, HTMLAttributes, useState } from "react";

interface I_AboutPierProps extends HTMLAttributes<HTMLDivElement> {}

const AboutPier: FC<I_AboutPierProps> = ({ className, style, id }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      id={id && id}
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      {
        <button
          className={styles.wrapper__img_btn}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <img
            className={`${styles.wrapper__img} ${
              !isActive && styles.wrapper__img_active
            }`}
            style={{ margin: "0px auto" }}
            src="/teethPortal_mobile/images/IMG_1907 2.png"
          />
          <img
            className={`${styles.wrapper__img} ${
              isActive && styles.wrapper__img_active
            }`}
            style={{ margin: "-200px auto 0px auto" }}
            src="/teethPortal_mobile/images/majakActive.png"
          />
        </button>
      }
    </div>
  );
};

export default AboutPier;
