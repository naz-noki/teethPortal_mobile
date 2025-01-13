import DeviceType from "@/components/DeviceType/DeviceType";
import AuthorDescription from "@/sections/AuthorDescription/AuthorDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "@/constants/images";
// import "swiper/css";

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
              slidesPerView={1}
              style={{
                width: "329px !important",
                height: "max-content",
                marginTop: 18,
              }}
            >
            {
                images.map((el, idx) => 
                    <SwiperSlide
                        key={idx}
                        style={{
                            width: "329px !important",
                            height: "max-content",
                          }}
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
