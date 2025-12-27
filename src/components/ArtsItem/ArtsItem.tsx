import { FC, HTMLAttributes, useState, useRef } from "react";
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
  const slidesCounter = item.fileIds.length;
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${className && className}`}
      style={style}
    >
      <div className={styles.wrapper__slider_block}>
        <img
          src="/teethPortal_mobile/icons/arrowLeft.svg"
          alt="Arrow down icon"
          className={`
            ${styles.wrapper__slider_icon}
            ${
              slidesCounter > 1 &&
              activeSlideIdx !== 0 &&
              styles.wrapper__slider_icon_active
            }
          `}
          onClick={() => handlePrevSlide()}
          loading="lazy"
        />
        <Swiper
          spaceBetween={28}
          className={styles.wrapper__slider}
          onSlideChange={(swiper) => setActiveSlideIdx(swiper.activeIndex)}
          ref={swiperRef}
        >
          {item.fileIds.map((el, idx) => (
            <SwiperSlide key={idx} className={styles.wrapper__slider_slide}>
              <img
                src={el}
                className={styles.wrapper__slider_img}
                alt={`Slide ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src="/teethPortal_mobile/icons/arrowRight.svg"
          alt="Arrow down icon"
          className={`
            ${styles.wrapper__slider_icon}
            ${
              slidesCounter > 1 &&
              activeSlideIdx !== slidesCounter - 1 &&
              styles.wrapper__slider_icon_active
            }
          `}
          onClick={() => handleNextSlide()}
        />
      </div>
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
