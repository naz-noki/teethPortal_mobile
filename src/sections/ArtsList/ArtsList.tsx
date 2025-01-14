import ArtsItem from "@/components/ArtsItem/ArtsItem";
import arts from "@/constants/arts";
import styles from "@/sections/ArtsList/ArtsList.module.css";

const ArtsList = () => {

    return (
        <div className={styles.wrapper}>
        {
            arts.map((el, idx) => 
                <ArtsItem 
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    fileId={el.fileId}
                    showArrow={idx !== arts.length-1}
                />
            )
        }
        </div>
    );
};

export default ArtsList
