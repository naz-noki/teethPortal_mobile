import DefaultButton from "@/components/DefaultButton/DefaultButton";
import TextBlock from "@/components/TextBlock/TextBlock";
import { SOCIAL_LINKS } from "@/constants/links";
import styles from "@/sections/PriceList/PriceList.module.css";
import { FC, HTMLAttributes } from "react";

interface I_PriceListProps extends HTMLAttributes<HTMLDivElement> {}

const PriceList: FC<I_PriceListProps> = ({ className, style, id }) => {
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      <div className={styles.wrapper__block}>
        <p className={styles.wrapper__text}>КАРТИНА НА ХОЛСТЕ</p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          с подрамником или на картоне
        </p>
      </div>
      <div className={styles.wrapper__block}>
        <p className={styles.wrapper__text}>маленький формат</p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          до 30х40 см
        </p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 5 000 ₽
        </p>
        <p className={styles.wrapper__text}>средний формат</p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          до 50х70 см
        </p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 20 000 ₽
        </p>
        <p className={styles.wrapper__text}>большой формат</p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          от 60х80 см
        </p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 50 000 ₽
        </p>
      </div>
      <div className={styles.wrapper__driver} />
      <div className={styles.wrapper__block}>
        <p className={styles.wrapper__text}>
          ОТКРЫТКА НА БУМАГЕ (рисунок) скетч
        </p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          карандаш, линер
        </p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 2 000 ₽
        </p>
        <p className={styles.wrapper__text}>полноценная работа </p>
        <p
          className={styles.wrapper__text}
          style={{ color: "var(--main-grey)" }}
        >
          карандаши, краски
        </p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 3 000 ₽
        </p>
      </div>
      <div className={styles.wrapper__driver} />
      <div className={styles.wrapper__block}>
        <p className={styles.wrapper__text}>ДИДЖИТАЛ-АРТ</p>
        <p className={styles.wrapper__text}>эскиз</p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 2 000 ₽
        </p>
        <p className={styles.wrapper__text}>полноценная работа</p>
        <p
          className={styles.wrapper__text}
          style={{ fontFamily: "Century-Gothic-Bold-Italic" }}
        >
          от 3 000 ₽
        </p>
      </div>
      <TextBlock
        text={
          "P.S. цена зависит от размера, используемых материалов, детализации работы и сроков выполнения."
        }
        style={{ margin: "0 auto" }}
      />
      <TextBlock
        text={
          "Заказывая картину, вы получаете авторское видение идеи и её уникальное воплощение"
        }
        style={{ margin: "15px auto" }}
      />
      <DefaultButton
        text={"оформить заказ у милу"}
        style={{ margin: "30px auto 0px auto" }}
        handleClick={() => window.open(SOCIAL_LINKS.Telegram, "_blank")}
      />
    </div>
  );
};

export default PriceList;
