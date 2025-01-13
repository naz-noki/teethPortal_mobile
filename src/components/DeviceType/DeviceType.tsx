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
            <span className={styles.wrapper__text}>[ {text} ]</span>
        </div>
    );
};

export default DeviceType;
