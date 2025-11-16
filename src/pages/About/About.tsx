import { useEffect, useState } from "react";
import TabBar from "@/components/TabBar/TabBar";
import TextBlock from "@/components/TextBlock/TextBlock";
import { ABOUT_SECTIONS, AboutTabBar, content } from "@/constants/about";
import styles from "@/pages/About/About.module.css";
import AboutPier from "@/sections/AboutPier/AboutPier";
import PriceList from "@/sections/PriceList/PriceList";

const About = () => {
  const [activeTab, setActiveTab] = useState<ABOUT_SECTIONS>(
    ABOUT_SECTIONS.Artist
  );

  const handleTab = (value: ABOUT_SECTIONS) => {
    const section = document.getElementById(`AboutPage-${value}`);
    if (!section) return;

    setActiveTab(value);
    const offset = 65;
    const elementPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const sections = [
      {
        id: ABOUT_SECTIONS.Artist,
        element: document.getElementById(`AboutPage-${ABOUT_SECTIONS.Artist}`),
      },
      {
        id: ABOUT_SECTIONS.Myth,
        element: document.getElementById(`AboutPage-${ABOUT_SECTIONS.Myth}`),
      },
      {
        id: ABOUT_SECTIONS.Price,
        element: document.getElementById(`AboutPage-${ABOUT_SECTIONS.Price}`),
      },
    ];

    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        const offset = 75;

        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveTab(section.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.wrapper}>
      <TabBar
        items={AboutTabBar}
        activeValue={activeTab}
        onUpdate={(value) => handleTab(value as ABOUT_SECTIONS)}
        className={styles.wrapper__tabbar}
      />
      <img
        className={styles.wrapper__img}
        src="/teethPortal_mobile/images/IMG_9560 (1) 1.png"
        style={{ marginTop: 0 }}
      />
      <TextBlock
        text={content[0]}
        style={{ margin: "20px auto" }}
        id={`AboutPage-${ABOUT_SECTIONS.Artist}`}
      />
      <TextBlock text={content[1]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[2]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[3]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[4]} style={{ margin: "20px auto" }} />
      <img
        className={styles.wrapper__img}
        src="/teethPortal_mobile/images/IMG_9562.png"
      />
      <TextBlock
        text={content[5]}
        style={{ margin: "20px auto" }}
        id={`AboutPage-${ABOUT_SECTIONS.Myth}`}
      />
      <TextBlock text={content[6]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[7]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[8]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[9]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[10]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[11]} style={{ margin: "20px auto" }} />
      <TextBlock text={content[12]} style={{ margin: "20px auto" }} />
      <AboutPier />
      <PriceList
        id={`AboutPage-${ABOUT_SECTIONS.Price}`}
        style={{ margin: "20px auto 50px auto" }}
      />
      <div style={{ width: "100%", height: 15 }}></div>
    </main>
  );
};

export default About;
