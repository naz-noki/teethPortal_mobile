import DeviceType from "@/components/DeviceType/DeviceType";
import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "@/constants/images";
import "swiper/swiper-bundle.css";

const Main = () => {

    return (
        <main style={{ maxWidth: 329, margin: "0px auto 118px auto" }}>
            <AuthorDescription style={{ marginTop: 35 }} />
            <DeviceType 
                title={"Canon PowerShot A550"}
                text={"фотоальбом"} 
                iconPath={"/teethPortal_mobile/images/photoporat.svg"} 
                style={{ margin: "0 auto" }}    
            />
            <Swiper
                spaceBetween={28}
                style={{ margin: "18px auto" }}
            >
            {
                images.map((el, idx) => 
                    <SwiperSlide
                        key={idx}
                    >
                        <img src={el} style={{ maxWidth: 329 }} />
                    </SwiperSlide>
                )
            }
            </Swiper>
        </main>
    );
};

export default Main;
