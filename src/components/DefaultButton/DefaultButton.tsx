import styles from "@/components/DefaultButton/DefaultButton.module.css";
import { FC, HTMLAttributes } from "react";

interface I_DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick: () => void;
}

const DefaultButton: FC<I_DefaultButtonProps> = ({
  className,
  style,
  handleClick,
  text,
}) => {
  return (
    <button
      className={`${styles.wrapper} ${className && className}`}
      style={style}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
