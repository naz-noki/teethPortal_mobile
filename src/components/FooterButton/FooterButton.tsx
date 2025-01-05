import { FC } from "react";
import style from "./FooterButton.module.css";

interface I_FooterButtonProps {
    activeText: string;
    title: string;
    isActive: boolean;
    onClick: () => void;
};

const FooterButton: FC<I_FooterButtonProps> = ({
    activeText, title, isActive, onClick,
}) => {

    return (
        <button className={style.wrapper} onClick={() => onClick()}>
            <p 
                className={`
                    ${style.wrapper__activeText_nd}
                    ${isActive && style.wrapper__activeText}    
                `}
            >
                {activeText}
            </p>
            <p 
                className={`
                    ${style.wrapper__title}
                    ${isActive && style.wrapper__title_active}    
                `}
            >
                {title}
            </p>
        </button>
    );
};

export default FooterButton;
