import styles from "@/components/FaqItem/FaqItem.module.css";
import { FC, HTMLAttributes } from "react";

interface I_FaqItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string; 
    content: string; 
};

const FaqItem: FC<I_FaqItemProps> = ({
    title, content,
}) => {

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.wrapper__title }>- {title}</h3>
            <p className={styles.wrapper__content}>{content}</p>
        </div>
    );
};

export default FaqItem;
