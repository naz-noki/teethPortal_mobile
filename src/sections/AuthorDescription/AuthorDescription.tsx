import styles from "@/sections/AuthorDescription/AuthorDescription.module.css";

const AuthorDescription = () => {

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.wrapper__name}>милу</h1>
            <img className={styles.wrapper__avatar} src={"/images/milu.svg"} />
            <div className={styles.wrapper__type}>Художник</div>
            <p className={styles.wrapper__descr}>
                с практическими навыками работы
                графическим дизайнером
                и теоретическими – в области 
                управления персоналом
            </p>
        </section>
    );
};

export default AuthorDescription;
