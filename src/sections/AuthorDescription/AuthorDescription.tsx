import { SOCIAL_LINKS } from "@/constants/links";
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
            <a className={styles.wrapper__type_link} href={SOCIAL_LINKS.Telegram} target="_blank">
                <div className={styles.wrapper__type}>
                    <span className={styles.wrapper__type_text}>Художник</span>
                    <img className={styles.wrapper__type_icon} src="/teethPortal_mobile/icons/tgLogo.svg" />
                </div>
            </a>
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
