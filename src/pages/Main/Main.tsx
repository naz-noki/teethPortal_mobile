import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import ArtsList from "@/sections/ArtsList/ArtsList";
import "swiper/swiper-bundle.css";

const Main = () => {

    return (
        <main style={{ maxWidth: 329, margin: "0px auto 118px auto" }}>
            <AuthorDescription style={{ marginTop: 35 }} />
            <ArtsList style={{ marginTop: 46 }} />
        </main>
    );
};

export default Main;
