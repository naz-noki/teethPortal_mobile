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
        ${className && className}
      `}
      style={style}
    >
      <h1 className={styles.wrapper__name}>милу</h1>
      <img
        className={styles.wrapper__avatar}
        src={"/teethPortal_mobile/gif/avatar.gif"}
      />
      {/*  */}
      <div className={styles.wrapper__block}>
        <a
          className={styles.wrapper__type_link}
          href={SOCIAL_LINKS.Pinterest}
          target="_blank"
        >
          <div className={styles.wrapper__type}>
            <img
              className={styles.wrapper__type_icon}
              src="/teethPortal_mobile/icons/pinterestLogo.svg"
            />
          </div>
        </a>
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
        <a
          className={styles.wrapper__type_link}
          href={SOCIAL_LINKS.Instagram}
          target="_blank"
        >
          <div className={styles.wrapper__type}>
            <img
              className={styles.wrapper__type_icon}
              src="/teethPortal_mobile/icons/instLogo.svg"
            />
          </div>
        </a>
      </div>
      {/*  */}
    </section>
  );
};

export default AuthorDescription;
