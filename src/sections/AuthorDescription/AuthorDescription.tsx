import styles from "@/sections/AuthorDescription/AuthorDescription.module.css";
import { FC, HTMLAttributes } from "react";

interface I_AuthorDescriptionProps extends HTMLAttributes<HTMLDivElement> {

};

const AuthorDescription: FC<I_AuthorDescriptionProps> = ({
    style, className,
}) => {

    return (
        <section 
            className={`
                ${styles.wrapper} 
                ${className && className}`
            } 
            style={style}
        >
            <h1 className={styles.wrapper__name}>милу</h1>
            <img className={styles.wrapper__avatar} src={"/teethPortal_mobile/gif/avatar.gif"} />
            <div className={styles.wrapper__type}>Художник</div>
            <p className={styles.wrapper__descr}>
                с практическими навыками работы
                графическим дизайнером
                и теоретическими знаниями 
                в  области управления персоналом
            </p>
        </section>
    );
};

export default AuthorDescription;
