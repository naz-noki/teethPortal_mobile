export enum ART_TYPES {
  Paintings = "картины",
  Drawings = "рисунки",
  Digital = "диджитал",
  Photos = "фото",
}

export interface I_Art {
  title: string;
  price?: string;
  year: number;
  material: string;
  base: string;
  size: string;
  fileIds: string[];
}

export const ArtsTabBar = [
  {
    value: ART_TYPES.Paintings,
    showIcon: false,
    iconPath: "",
  },
  {
    value: ART_TYPES.Drawings,
    showIcon: false,
    iconPath: "",
  },
  {
    value: ART_TYPES.Digital,
    showIcon: false,
    iconPath: "",
  },
  {
    value: ART_TYPES.Photos,
    showIcon: true,
    iconPath: "/teethPortal_mobile/icons/pinterestIcon.png",
  },
];

const paintings: I_Art[] = [
  {
    title: "проклятье голубых глаз",
    year: 2025,
    size: "50x50",
    price: "50 000 ₽",
    material: "акрил, скульптурная паста, синие розы",
    base: "холст на подрамнике",
    fileIds: [
      "/teethPortal_mobile/images/проклятье голубых глаз_1.png",
      "/teethPortal_mobile/images/IMG_9321 1.png",
    ],
  },
  {
    title: "18: роза",
    year: 2024,
    size: "10x10",
    price: "5 000 ₽",
    material: "масло",
    base: "холст на картоне",
    fileIds: ["/teethPortal_mobile/images/18 роза 1.png"],
  },
];

const drawings: I_Art[] = [
  {
    title: "проклятье голубых глаз",
    year: 2025,
    size: "50x50",
    price: "50 000 ₽",
    material: "акрил, скульптурная паста, синие розы",
    base: "холст на подрамнике",
    fileIds: [
      "/teethPortal_mobile/images/проклятье голубых глаз_1.png",
      "/teethPortal_mobile/images/IMG_9321 1.png",
    ],
  },
];

const digital: I_Art[] = [
  {
    title: "18: роза",
    year: 2024,
    size: "10x10",
    price: "5 000 ₽",
    material: "масло",
    base: "холст на картоне",
    fileIds: ["/teethPortal_mobile/images/18 роза 1.png"],
  },
];

const photos: I_Art[] = [];

export const ARTS = {
  [ART_TYPES.Paintings]: paintings,
  [ART_TYPES.Drawings]: drawings,
  [ART_TYPES.Digital]: digital,
  [ART_TYPES.Photos]: photos,
};
