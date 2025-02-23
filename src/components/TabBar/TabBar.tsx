import styles from "@/components/TabBar/TabBar.module.css";
import { FC, HTMLAttributes } from "react";

interface I_TabBarItem {
  value: string;
  showIcon?: boolean;
  iconPath?: string;
}

interface I_TabBarProps extends HTMLAttributes<HTMLDivElement> {
  items: I_TabBarItem[];
  activeValue?: string;
  onUpdate: (value: string) => void;
}

const TabBar: FC<I_TabBarProps> = ({
  className,
  style,
  items,
  activeValue,
  onUpdate,
}) => {
  return (
    <div
      className={`
        ${styles.wrapper}
        ${className && className}
    `}
      style={style}
    >
      {items.map((el, idx) => (
        <button
          className={`
            ${styles.wrpper__btn} 
            ${activeValue === el.value && styles.wrpper__btn_active}
          `}
          key={idx}
          onClick={() => onUpdate(el.value)}
        >
          <p className={styles.wrapper__btn_text}>{el.value}</p>
          {el.showIcon && el.iconPath && (
            <img src={el.iconPath} className={styles.wrapper__btn_icon} />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
