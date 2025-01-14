import styles from "@/components/DeviceType/DeviceType.module.css";
import { FC, HTMLAttributes } from "react";

interface I_DeviceTypeProps extends HTMLAttributes<HTMLDivElement> {
    iconPath: string;
    title: string;
    text: string;
};

const DeviceType: FC<I_DeviceTypeProps> = ({
    iconPath, title, text, style,
}) => {

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.wrapper__block}>
                <img 
                    src={iconPath} 
                    alt="device icon" 
                    className={styles.block__img}
                />
                <p className={styles.block__text}>{title}</p>
            </div>
            <div className={styles.wrapper__arrow}>
                <span className={styles.arrow__text}>[ {text} ]</span>
                <img 
                    src="/teethPortal_mobile/icons/arrow.svg" 
                    alt="Arrow icon" 
                    className={styles.arrow__img}
                />
            </div>
        </div>
    );
};

export default DeviceType;
