import styles from "@/components/TextBlock/TextBlock.module.css";
import { FC, HTMLAttributes } from "react";

interface I_TextBlockProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const TextBlock: FC<I_TextBlockProps> = ({ text, className, style, id }) => {
  return (
    <p
      id={id}
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      {text}
    </p>
  );
};

export default TextBlock;
