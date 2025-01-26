import styles from "@/pages/Favorite/Favorite.module.css";

const Favorite = () => {

    return (
        <main className={styles.wrapper}>
            <img className={styles.wrapper__img} src={"/teethPortal_mobile/gif/comeBack.gif"} />
            <p className={styles.wrapper__text}>
                раздел временно недоступен. 
                скоро появится возможность добавлять 
                работы в избранное
            </p>
        </main>
    );
};

export default Favorite;
