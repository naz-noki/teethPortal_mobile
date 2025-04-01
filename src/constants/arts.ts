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
  material?: string;
  base?: string;
  size?: string;
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
    showIcon: false,
    iconPath: "",
  },
];

const paintings: I_Art[] = [
  {
    title: "под деревом",
    year: 2025,
    size: "20x30",
    price: "17 000 ₽",
    material: "масло",
    base: "холст на картоне",
    fileIds: [
      "/teethPortal_mobile/images/pod_derevom.jpg",
    ],
  },
  {
    title: "уязвимое положение",
    year: 2025,
    size: "15x20",
    material: "масло",
    base: "холст на картоне",
    fileIds: [
      "/teethPortal_mobile/images/уязвимое положение.png",
    ],
  },
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
  {
    title: "энергия",
    year: 2024,
    size: "20x15 (25х20 с багетом)",
    material: "акрил",
    base: "холст на картоне",
    fileIds: [
      "/teethPortal_mobile/images/энергия_1.PNG",
      "/teethPortal_mobile/images/энергия_2.PNG",
    ],
  },
  {
    title: "красивое лицо",
    year: 2024,
    size: "25x15",
    price: "25 000 ₽",
    material: "акрил",
    base: "холст на картоне",
    fileIds: ["/teethPortal_mobile/images/красивое лицо 1.png"],
  },
  {
    title: "птенец",
    year: 2024,
    size: "50x40",
    price: "100 000 ₽",
    material: "акрил",
    base: "холст на подрамнике",
    fileIds: ["/teethPortal_mobile/images/птенец_1.png"],
  },
  {
    title: "пепельница",
    year: 2024,
    size: "20x20",
    price: "60 000 ₽",
    material: "акрил, облепиховый чай, пепел",
    base: "холст на подрамнике",
    fileIds: [
      "/teethPortal_mobile/images/пепельница_1.png",
      "/teethPortal_mobile/images/пепельница_2.png",
    ],
  },
  {
    title: "привязанность",
    year: 2023,
    size: "25x25",
    price: "8 000 ₽",
    material: "акрил",
    base: "холст на картоне",
    fileIds: ["/teethPortal_mobile/images/IMG_0587.PNG"],
  },
  {
    title: "малиновый рассвет",
    year: 2022,
    size: "50x40",
    material: "акрил, пастель",
    base: "холст на картоне",
    fileIds: [
      "/teethPortal_mobile/images/малиновый рассвет_1.png",
      "/teethPortal_mobile/images/малиновый рассвет_2.png",
      "/teethPortal_mobile/images/малиновый рассвет_3.png",
    ],
  },
];

const drawings: I_Art[] = [
  {
    title: "танцы в ресторане",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/танцы в ресторане.png"],
  },
  {
    title: "красивое лицо. эскиз",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/красивое лицо. эскиз.png"],
  },
  {
    title: "секрет лица",
    year: 2024,
    fileIds: [
      "/teethPortal_mobile/images/секрет лица_1.png",
      "/teethPortal_mobile/images/секрет лица_2.png",
    ],
  },
  {
    title: "перед выдохом",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/перед выдохом.png"],
  },
  {
    title: "я выросла",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/я выросла.png"],
  },
  {
    title: "красный мячик",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/красный мячик.png"],
  },
  {
    title: "после встречи",
    year: 2024,
    fileIds: [
      "/teethPortal_mobile/images/после встречи_1.png",
      "/teethPortal_mobile/images/после встречи_2.png",
    ],
  },
  {
    title: "перед встречей",
    year: 2024,
    fileIds: [
      "/teethPortal_mobile/images/перед встречей_1.png",
      "/teethPortal_mobile/images/перед встречей_2.png",
      "/teethPortal_mobile/images/перед встречей_3.png",
    ],
  },
  {
    title: "ангел, я скучаю",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/ангел, я скучаю.png"],
  },
  {
    title: "родительская любовь",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/родительская любовь.png"],
  },
  {
    title: "ангельская любовь",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/ангельская любовь.png"],
  },
  {
    title: "метаморфоза",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/метаморфоза.png"],
  },
  {
    title: "колодец",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/колодец.png"],
  },
  {
    title: "холодная зима",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/холодная зима.png"],
  },
  {
    title: "теплая зима",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/теплая зима.png"],
  },
  {
    title: "чайки",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/чайки.png"],
  },
  {
    title: "я+йа=я",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/я+йа=я.png"],
  },
  {
    title: "ресницы",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/ресницы.png"],
  },
  {
    title: "добро пожаловать",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/добро пожаловать.png"],
  },
  {
    title: "роберт во тьме",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/роберт во тьме.png"],
  },
  {
    title: "небеса в автобусе",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/небеса в автобусе.png"],
  },
  {
    title: "отпусти",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/отпусти.png"],
  },
  {
    title: "спасибо, что не испугался",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/спасибо, что не испугался.png"],
  },
  {
    title: "кусь",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/кусь.png"],
  },
  {
    title: "вы кое-что обронили",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/вы кое-что обронили.png"],
  },
  {
    title: "рождение",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/рождение.png"],
  },
  {
    title: "замочек пальцами и ребрами",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/замочек пальцами и ребрами.png"],
  },
  {
    title: "прошлое настоящее будущее",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/IMG_0589.PNG"],
  },
  {
    title: "обсидиан",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/обсидиан.png"],
  },
  {
    title: "пустые глазницы",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/пустые глазницы.png"],
  },
  {
    title: "паутина",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/паутина.png"],
  },
  {
    title: "молчание",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/молчание.png"],
  },
  {
    title: "целое",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/целое.png"],
  },
  {
    title: "живой стул",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/живой стул.png"],
  },
  {
    title: "дракон из сна",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/дракон из сна.png"],
  },
  {
    title: "лица луни",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/лица луни.png"],
  },
  {
    title: "котэ",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/котэ.png"],
  },
  {
    title: "выход всегда есть",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/выход всегда есть.png"],
  },
  {
    title: "упадок с элементами ясности",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/упадок с элементами ясности.png"],
  },
  {
    title: "йа – опыт или интерпретация",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/йа опыт или.png"],
  },
  {
    title: "лунный свет",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/лунный свет.png"],
  },
  {
    title: "приглядывает",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/приглядывает.png"],
  },
  {
    title: "желаю не терять",
    year: 2022,
    size: "А5",
    base: "открытка на черной бумаге",
    fileIds: [
      "/teethPortal_mobile/images/желаю не терять.png",
      "/teethPortal_mobile/images/желаю не терять_2.png",
      "/teethPortal_mobile/images/желаю не терять_3.png",
    ],
  },
  {
    title: "переломный момент",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/переломный момент.png"],
  },
  {
    title: "проснись",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/проснись.png"],
  },
  {
    title: "женские руки",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/женские руки.png"],
  },
  {
    title: "ложь",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/ложь.png"],
  },
];

const digital: I_Art[] = [
  {
    title: "портал",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/teethportal.png"],
  },
  {
    title: "98",
    year: 2024,
    fileIds: ["/teethPortal_mobile/images/98.png"],
  },
  {
    title: "whereismymind",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/whereismymind.png"],
  },
  {
    title: "выпуск",
    year: 2023,
    fileIds: [
      "/teethPortal_mobile/images/выпуск_1.png",
      "/teethPortal_mobile/images/выпуск_2.png",
    ],
  },
  {
    title: "дерево в поле",
    year: 2023,
    fileIds: [
      "/teethPortal_mobile/images/дерево в поле_1.png",
      "/teethPortal_mobile/images/дерево в поле_2.png",
    ],
  },
  {
    title: "ангел меня не покинет",
    year: 2023,
    fileIds: [
      "/teethPortal_mobile/images/ангел меня не покинет_1.png",
      "/teethPortal_mobile/images/ангел меня не покинет_2.png",
    ],
  },
  {
    title: "ино",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/ино.png"],
  },
  {
    title: "мысленных образов не обнаружено",
    year: 2023,
    fileIds: [
      "/teethPortal_mobile/images/мысленных образов поблизости не обнаружено.png",
    ],
  },
  {
    title: "лицо луни",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/лицо луни.png"],
  },
  {
    title: "соединение атомов",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/соединение атомов.gif"],
  },
  {
    title: "тише, она уснула",
    year: 2023,
    fileIds: ["/teethPortal_mobile/images/тише, она уснула.png"],
  },
  {
    title: "просвет",
    year: 2022,
    fileIds: ["/teethPortal_mobile/images/просвет.png"],
  },
];

const photos: I_Art[] = [];

export const ARTS = {
  [ART_TYPES.Paintings]: paintings,
  [ART_TYPES.Drawings]: drawings,
  [ART_TYPES.Digital]: digital,
  [ART_TYPES.Photos]: photos,
};
