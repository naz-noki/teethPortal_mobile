import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setIsDefault, setLang } from "./store/slices/languages";
import { RootState } from "./store/store";
import Footer from "./sections/Footer/Footer";
import { relative } from "path";

const App = () => {
  const { isDefault } = useSelector((state: RootState) => state.languagesReducer);
  const dispatch = useDispatch();

  // Set language
  useEffect(() => {
    // @ts-ignore
    const lang = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
    if(!isDefault || !lang) return;
    dispatch(setLang(lang), setIsDefault(false));
  }, [isDefault]);

  return (
    <>
      <Outlet />
      <Footer />
    </> 
  );
};

export default App;
