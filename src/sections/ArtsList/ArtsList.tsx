import ArtsItem from "@/components/ArtsItem/ArtsItem";
import arts from "@/constants/arts";
import styles from "@/sections/ArtsList/ArtsList.module.css";
import { FC, HTMLAttributes } from "react";

interface I_ArtsListProps extends HTMLAttributes<HTMLDivElement> {};

const ArtsList: FC<I_ArtsListProps> = ({
    className, style,
}) => {

    return (
        <div className={`${styles.wrapper} ${className && className}`} style={style}>
        {
            arts.map((el, idx) => 
                <ArtsItem 
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    year={el.year}
                    material={el.material}
                    size={el.size}
                    fileIds={el.fileIds}
                    showArrow={idx !== arts.length-1}
                />
            )
        }
        </div>
    );
};

export default ArtsList
