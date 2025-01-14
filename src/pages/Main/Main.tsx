import DeviceType from "@/components/DeviceType/DeviceType";
import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "@/constants/images";
import "swiper/swiper-bundle.css";

const Main = () => {

    return (
        <div style={{ maxWidth: 329, margin: "0 auto" }}>
            <AuthorDescription />
            <DeviceType 
                title={"Canon PowerShot A550"}
                text={"фотоальбом"} 
                iconPath={"/images/photoporat.svg"} 
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
        </div>
    );
};

export default Main;
