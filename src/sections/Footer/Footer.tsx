import FooterButton from "@/components/FooterButton/FooterButton";
import style from "./Footer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getPhrase } from "@/i18n";
import { useState } from "react";
import { getNavigationLink, NAVIGATION_LINKS } from "@/constants/navigation";
import { useNavigate } from "react-router-dom";
// import { Languages } from "@/store/slices/languages/types";
// import { setLang } from "@/store/slices/languages";
// import TextButton from "@/components/TextButton/TextButton";

const Footer = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { lang } = useSelector((state: RootState) => state.languagesReducer);
    const [activeButton, setActiveButton] = useState<NAVIGATION_LINKS>(NAVIGATION_LINKS.Welcome);

    // const setActiveLang = (lang: Languages) => {
    //     dispatch(setLang(lang));
    // };

    const handleFooterButton = (link: NAVIGATION_LINKS) => {
        navigate(getNavigationLink(link));
        setActiveButton(link);
    }; 

    return (
        <footer className={style.wrapper}>
            <section className={style.wrapper__navigation}>
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
                    title={activeButton === NAVIGATION_LINKS.Favorite ? getPhrase(lang, "footerFavoriteActive") : getPhrase(lang, "footerFavorite")}
                    activeText={getPhrase(lang, "footerZone")}
                />         
            </section>     
            {/* <section className={style.wrapper__language}>
                <TextButton
                    isActive={lang === Languages.ru}
                    text={"ру"}
                    onClick={() => setActiveLang(Languages.ru)}
                />
                <TextButton
                    isActive={lang === Languages.en}
                    text={"en"}
                    onClick={() => setActiveLang(Languages.en)}
                />
            </section>           */}
        </footer>
    );
};

export default Footer;
