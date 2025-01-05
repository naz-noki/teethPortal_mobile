import { I_Phrases, Languages } from "@/store/slices/languages/types";
import en from "./en.json";
import ru from "./ru.json";

type T_Translations = {
    [key in Languages]: I_Phrases;
};

export const translations: T_Translations = { en, ru };
export const getPhrase = (lang: Languages, key: keyof I_Phrases) => translations[lang][key];
