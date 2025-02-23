import TabBar from "@/components/TabBar/TabBar";
import TextBlock from "@/components/TextBlock/TextBlock";
import { ABOUT_SECTIONS, AboutTabBar, content } from "@/constants/about";
import styles from "@/pages/About/About.module.css";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<ABOUT_SECTIONS>(
    ABOUT_SECTIONS.Artist
  );

  const handleTab = (value: ABOUT_SECTIONS) => {
    const section = document.getElementById(`AboutPage-${value}`);
    console.log(`AboutPage-${value}`);
    console.log(section);
    if (section) {
      setActiveTab(value);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.wrapper}>
      <TabBar
        items={AboutTabBar}
        activeValue={activeTab}
        onUpdate={(value) => handleTab(value as ABOUT_SECTIONS)}
        style={{ margin: "25px auto 0px auto" }}
      />
      <img
        className={styles.wrapper__img}
        src="/teethPortal_mobile/images/IMG_9560 (1) 1.png"
      />
      <TextBlock text={content[0]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[1]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[2]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[3]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[4]} style={{ margin: "20px auto" }} />
      <img
        className={styles.wrapper__img}
        src="/teethPortal_mobile/images/IMG_9562.png"
      />
      <TextBlock text={content[5]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[6]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[7]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[8]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[9]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[10]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[11]} style={{ margin: "20px auto" }} />
      <TextBlock
        text={content[12]}
        style={{ margin: "20px auto" }}
        id={`AboutPage-${ABOUT_SECTIONS.Price}`}
      />
    </main>
  );
};

export default About;
