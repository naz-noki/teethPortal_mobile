import { SOCIAL_LINKS } from "@/constants/links";
import styles from "@/sections/AuthorDescription/AuthorDescription.module.css";
import { FC, HTMLAttributes } from "react";

interface I_AuthorDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

const AuthorDescription: FC<I_AuthorDescriptionProps> = ({
  style,
  className,
}) => {
  return (
    <section
      className={`
                ${styles.wrapper} 
                ${className && className}`}
      style={style}
    >
      <h1 className={styles.wrapper__name}>милу</h1>
      <img
        className={styles.wrapper__avatar}
        src={"/teethPortal_mobile/gif/avatar.gif"}
      />
      {/*  */}
      <div className={styles.wrapper__block}>
        <div className={styles.wrapper__type} style={{ padding: "9px 20px" }}>
          <span className={styles.wrapper__type_text}>Художник</span>
        </div>
        {/*  */}
        <a
          className={styles.wrapper__type_link}
          href={SOCIAL_LINKS.Telegram}
          target="_blank"
        >
          <div className={styles.wrapper__type}>
            <img
              className={styles.wrapper__type_icon}
              src="/teethPortal_mobile/icons/tgLogo.svg"
            />
          </div>
        </a>
        {/*  */}
        <div className={styles.wrapper__type} style={{ padding: "9px 20px" }}>
          <span className={styles.wrapper__type_text}>AI-креатор</span>
        </div>
      </div>
      {/*  */}
      <p className={styles.wrapper__descr}>
        <span>
          с практическими навыками работы
          <br />
        </span>
        <span>
          графическим дизайнером
          <br />
        </span>
        <span>
          и теоретическими исследованиями
          <br />
        </span>
        <span>
          в области креативной экономики
          <br />
        </span>
      </p>
    </section>
  );
};

export default AuthorDescription;
