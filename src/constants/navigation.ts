export enum NAVIGATION_LINKS {
    DefaultURI = "/teethPortal_mobile",
    FAQ = "/faq",
    Welcome = "",
    Favorite = "/favorite",
}; 

export const getNavigationLink = (link: NAVIGATION_LINKS) => NAVIGATION_LINKS.DefaultURI + link;
