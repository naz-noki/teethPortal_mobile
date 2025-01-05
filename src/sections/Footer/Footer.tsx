import FooterButton from "@/components/FooterButton/FooterButton";
import style from "./Footer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getPhrase } from "@/i18n";
import { useState } from "react";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((state: RootState) => state.languagesReducer);
    const [activeButton, setActiveButton] = useState<NAVIGATION_LINKS>(NAVIGATION_LINKS.Welcome);

    const handleFooterButton = (link: NAVIGATION_LINKS) => {
        navigate(link);
        setActiveButton(link);
    }; 

    return (
        <footer className={style.wrapper}>
            <div className={style.wrapper__block}>
                <FooterButton 
                    onClick={() => handleFooterButton(NAVIGATION_LINKS.FAQ)}
                    isActive={activeButton === NAVIGATION_LINKS.FAQ}
                    title={getPhrase(lang, "footerFAQ")}
                    activeText={getPhrase(lang, "footerZone")}
                />
                <FooterButton 
                    onClick={() => handleFooterButton(NAVIGATION_LINKS.Welcome)}
                    isActive={activeButton === NAVIGATION_LINKS.Welcome}                
                    title={getPhrase(lang, "footerWelcome")}
                    activeText={getPhrase(lang, "footerZone")}
                />
                <FooterButton 
                    onClick={() => handleFooterButton(NAVIGATION_LINKS.Favorite)}
                    isActive={activeButton === NAVIGATION_LINKS.Favorite}                
                    title={getPhrase(lang, "footerFavorite")}
                    activeText={getPhrase(lang, "footerZone")}
                />         
            </div>               
        </footer>
    );
};

export default Footer;
