import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import ArtsList from "@/sections/ArtsList/ArtsList";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { ART_TYPES } from "@/constants/arts";
import { SOCIAL_LINKS } from "@/constants/links";

const Main = () => {
    const [activeArtType, setActiveArtType] = useState<ART_TYPES>(ART_TYPES.Paintings);

    const handleActiveArtType = (value: ART_TYPES) => {
        setActiveArtType(value);
        if(value === ART_TYPES.Photos) window.open(SOCIAL_LINKS.Pinterest, '_blank');
    };

    return (
        <main style={{ maxWidth: 329, margin: "0px auto 118px auto" }}>
            <AuthorDescription style={{ marginTop: 35 }} />
            <ArtsList style={{ marginTop: 46 }} />
        </main>
    );
};

export default Main;
