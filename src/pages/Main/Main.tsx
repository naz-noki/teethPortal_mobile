import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import ArtsList from "@/sections/ArtsList/ArtsList";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { ART_TYPES, ARTS, ArtsTabBar } from "@/constants/arts";
import { SOCIAL_LINKS } from "@/constants/links";
import TabBar from "@/components/TabBar/TabBar";
import styles from "@/pages/Main/Main.module.css";
import ScrollTopButton from "@/sections/ScrollTopButton/ScrollTopButton";

const Main = () => {
  const [activeArtType, setActiveArtType] = useState<ART_TYPES>(
    ART_TYPES.Paintings
  );

  const handleActiveArtType = (value: ART_TYPES) => {
    if (value === ART_TYPES.Photos) {
      window.open(SOCIAL_LINKS.Pinterest, "_blank");
      setActiveArtType(ART_TYPES.Paintings);
      return;
    } else if (value === ART_TYPES.AI) {
      window.open(SOCIAL_LINKS.Instagram, "_blank");
      setActiveArtType(ART_TYPES.Paintings);
      return;
    };
    
    setActiveArtType(value);
  };

  return (
    <main className={styles.wrapper}>
      <AuthorDescription style={{ marginTop: 35 }} />
      <TabBar
        items={ArtsTabBar}
        activeValue={activeArtType}
        onUpdate={(value) => handleActiveArtType(value as ART_TYPES)}
        style={{ margin: "25px auto 0px auto" }}
      />
      <ArtsList style={{ marginTop: 46 }} items={ARTS[activeArtType]} />
      <ScrollTopButton />
    </main>
  );
};

export default Main;
