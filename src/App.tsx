import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setIsDefault, setLang } from "./store/slices/languages";
import { RootState } from "./store/store";
import Footer from "./sections/Footer/Footer";
import Snowfall from "react-snowfall";

const App = () => {
  const { isDefault } = useSelector(
    (state: RootState) => state.languagesReducer
  );
  const dispatch = useDispatch();

  const preventDefault = (e: Event) => {
    e.preventDefault();
  };

  // Set language
  useEffect(() => {
    // @ts-ignore
    const lang = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
    if (!isDefault || !lang) return;
    dispatch(setLang(lang), setIsDefault(false));
  }, [isDefault]);

  // Cancel the default browser behavior when trying to open the context menu
  useEffect(() => {
    console.log("v1");
    document.addEventListener("contextmenu", preventDefault);
    return () => {
      document.removeEventListener("contextmenu", preventDefault);
    };
  }, []);

  return (
    <>
      <Snowfall 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }} 
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
