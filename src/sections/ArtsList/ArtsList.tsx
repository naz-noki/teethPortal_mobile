import ArtsItem from "@/components/ArtsItem/ArtsItem";
import { I_Art } from "@/constants/arts";
import styles from "@/sections/ArtsList/ArtsList.module.css";
import { FC, HTMLAttributes } from "react";

interface I_ArtsListProps extends HTMLAttributes<HTMLDivElement> {
  items: I_Art[];
}

const ArtsList: FC<I_ArtsListProps> = ({ items, className, style }) => {
  return (
    <div
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      {items.map((el, idx) => (
        <ArtsItem key={idx} item={el} showArrow={idx !== items.length - 1} />
      ))}
    </div>
  );
};

export default ArtsList;
