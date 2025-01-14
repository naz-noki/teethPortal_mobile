import { FC, HTMLAttributes } from "react";
import styles from "@/components/ArtsItem/ArtsItem.module.css";

interface I_ArtsItemProps extends HTMLAttributes<HTMLDivElement> {
    id: string; 
    title: string; 
    fileId: string;
    showArrow: boolean;
};

const ArtsItem: FC<I_ArtsItemProps> = ({
    id, title, fileId, showArrow, className, style, 
}) => {

    return (
        <div className={`${styles.wrapper} ${className && className}`} style={style}>
            <img 
                src={fileId} 
                alt="Arts item image" 
                className={styles.wrapper__img}
            />
            <p className={styles.wrapper__text}>[ {title} ]</p>
        {
            showArrow && <img 
                src="/teethPortal_mobile/icons/arrowDown.svg" 
                alt="Arrow down icon"
                className={styles.wrapper__icon} 
            />
        }
        </div>
    );
};

export default ArtsItem;
