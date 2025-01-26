import { FC, HTMLAttributes } from "react";
import styles from "@/components/ArtsItem/ArtsItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

interface I_ArtsItemProps extends HTMLAttributes<HTMLDivElement> {
    id: string; 
    title: string; 
    year: number;
    material: string;
    size: string;
    fileIds: string[];
    showArrow: boolean;
};

const ArtsItem: FC<I_ArtsItemProps> = ({
    id, title, year, material, size, fileIds, showArrow, className, style, 
}) => {
    console.log(id);

    return (
        <div className={`${styles.wrapper} ${className && className}`} style={style}>
            <Swiper
                spaceBetween={28}
                style={{ margin: "18px auto" }}
            >
            {
                fileIds.map((el, idx) => 
                    <SwiperSlide
                        key={idx}
                    >
                        <img src={el} style={{ maxWidth: 329, maxHeight: 485 }} />
                    </SwiperSlide>
                )
            }
            </Swiper>
            <div className={styles.wrapper__info}>
                <div className={styles.wrapper__info_block}>
                    <p className={styles.wrapper__info_text}>{title}</p>
                    <p className={styles.wrapper__info_text}>{year}</p>
                </div>
                <div className={styles.wrapper__info_block}>
                    <p className={styles.wrapper__info_text}>{size}</p>
                    <p className={styles.wrapper__info_text}>{material}</p>
                </div>
            </div>
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
