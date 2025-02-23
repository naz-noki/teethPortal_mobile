import { FC, HTMLAttributes } from "react";
import styles from "@/components/ArtsItem/ArtsItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { I_Art } from "@/constants/arts";

interface I_ArtsItemProps extends HTMLAttributes<HTMLDivElement> {
  item: I_Art;
  showArrow: boolean;
}

const ArtsItem: FC<I_ArtsItemProps> = ({
  item,
  showArrow,
  className,
  style,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      <Swiper spaceBetween={28} className={styles.wrapper__slider}>
        {item.fileIds.map((el, idx) => (
          <SwiperSlide key={idx} className={styles.wrapper__slider_slide}>
            <img src={el} className={styles.wrapper__slider_img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.wrapper__info}>
        <div className={styles.wrapper__info_block}>
          <p className={styles.wrapper__info_text}>{item.title}</p>
          <p className={styles.wrapper__info_text}>{item.year}</p>
        </div>
        <div className={styles.wrapper__info_block}>
          <p className={styles.wrapper__info_text}>{item.base}</p>
          <p className={styles.wrapper__info_text}>{item.size}</p>
        </div>
        <div className={styles.wrapper__info_block}>
          <p className={styles.wrapper__info_text}>{item.material}</p>
        </div>
        {item.price && (
          <div
            className={styles.wrapper__info_block}
            style={{ justifyContent: "right" }}
          >
            <p className={styles.wrapper__info_price}>{item.price}</p>
          </div>
        )}
      </div>
      {showArrow && (
        <img
          src="/teethPortal_mobile/icons/arrowDown.svg"
          alt="Arrow down icon"
          className={styles.wrapper__icon}
        />
      )}
    </div>
  );
};

export default ArtsItem;
