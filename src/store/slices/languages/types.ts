export enum Languages {
  en = "en",
  ru = "ru",
};

export interface I_Phrases {
  title: string;
  footerZone: string;
  footerFAQ: string; 
  footerWelcome: string; 
  footerFavorite: string;
  footerFavoriteActive: string;
};

export interface I_InitialState {
  isDefault: boolean;
  lang: Languages;
};
