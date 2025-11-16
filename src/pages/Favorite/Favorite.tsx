import { SOCIAL_LINKS } from "@/constants/links";
import styles from "@/pages/Favorite/Favorite.module.css";

const Favorite = () => {

    return (
        <main className={styles.wrapper}>
            <div className={styles.wrapper__block}>
                <a 
                    href={SOCIAL_LINKS.TelegramBoost} 
                    target="_blank"
                    className={styles.wrapper__block_link}
                >
                     <img className={styles.wrapper__img} src={"/teethPortal_mobile/gif/comeBack.gif"} />
                    <p className={styles.wrapper__text}>
                        причал – это начало
                    </p>
                </a>
            </div>
        </main>
    );
};

export default Favorite;
