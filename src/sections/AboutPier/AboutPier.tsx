import DefaultButton from "@/components/DefaultButton/DefaultButton";
import TextBlock from "@/components/TextBlock/TextBlock";
import { SOCIAL_LINKS } from "@/constants/links";
import styles from "@/sections/AboutPier/AboutPier.module.css";
import { FC, HTMLAttributes, useState } from "react";

interface I_AboutPierProps extends HTMLAttributes<HTMLDivElement> {}

const AboutPier: FC<I_AboutPierProps> = ({ className, style, id }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    window.open(SOCIAL_LINKS.GoogleDock, "_blank");
  };

  return (
    <div
      id={id && id}
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      {
        <>
          <img
            onClick={() => setIsActive((prev) => !prev)}
            className={`${styles.wrapper__img} ${
              !isActive && styles.wrapper__img_active
            }`}
            style={{ margin: "0px auto" }}
            src="/teethPortal_mobile/images/IMG_1907 2.png"
          />
          <img
            onClick={() => setIsActive((prev) => !prev)}
            className={`${styles.wrapper__img} ${
              isActive && styles.wrapper__img_active
            }`}
            style={{ margin: "-200px auto 0px auto" }}
            src="/teethPortal_mobile/images/majakActive.png"
          />
        </>
      }
      <TextBlock
        text={
          "Приобретение картин – способ инвестиции в проект и сопричастие в его развитии, потому что причал – это не сайт художника; "
        }
        style={{ margin: "0 auto" }}
      />
      <TextBlock
        text={"причал – это платформа для объединения творческих людей. "}
        style={{ margin: "15px auto", fontWeight: "bold", fontStyle: "italic" }}
      />
      <TextBlock
        text={
          "Мы планируем превращать индивидуальное творчество в синергию, где мастерство каждого участника вносит свои уникальные детали в пространство и превращает его в коллективное произведение искусства. Если вы хотите стать сопричастным, заполните гугл форму:"
        }
        style={{ margin: "0 auto" }}
      />
      <DefaultButton
        text={"причалиться"}
        handleClick={() => handleClick()}
        style={{ margin: "15px auto 330px auto" }}
      />
    </div>
  );
};

export default AboutPier;
