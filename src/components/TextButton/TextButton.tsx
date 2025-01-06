import { FC } from "react";
import style from "./TextButton.module.css";

interface I_TextButtonProps {
    text: string; 
    isActive: boolean;
    onClick: () => void;
};

const TextButton: FC<I_TextButtonProps> = ({
    text, isActive, onClick,
}) => {

    return (
        <button
            className={`
                ${style.wrapper}
                ${isActive && style.wrapper__active}
            `}
            onClick={() => onClick()}
        >
            { text }
        </button>
    );
};

export default TextButton;
