import styles from "@/sections/ScrollTopButton/ScrollTopButton.module.css";
import { FC, HTMLAttributes, useEffect, useState } from "react";

interface I_ScrollTopButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const ScrollTopButton: FC<I_ScrollTopButtonProps> = ({ className, style }) => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) setIsActive(true);
    else setIsActive(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`
        ${styles.wrapper}
        ${isActive && styles.wrapper__active}
        ${className && className}
    `}
      style={style}
      onClick={() => handleClick()}
    >
      <img
        src="/teethPortal_mobile/icons/scrollTopIcon.svg"
        className={styles.wrapper__img}
      />
    </button>
  );
};

export default ScrollTopButton;
