import { FC } from "react";
import Snowfall from "react-snowfall";

export const BackGroundFall: FC = () => {
  const heartImages = [
    '/teethPortal_mobile/icons/BackGroundFall_icon1.png',
    '/teethPortal_mobile/icons/BackGroundFall_icon2.png',
    '/teethPortal_mobile/icons/BackGroundFall_icon3.png',
    '/teethPortal_mobile/icons/BackGroundFall_icon4.png',
    '/teethPortal_mobile/icons/BackGroundFall_icon5.png',
    '/teethPortal_mobile/icons/BackGroundFall_icon6.png',
  ];

  const imageElements = heartImages.map((src) => {
    const img = document.createElement('img');
    img.src = src;
    return img;
  });

    return  <Snowfall
        images={imageElements}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={100}
        radius={[15, 25]}    
        rotationSpeed={[-1.5, 1.5]} 
      />
};

