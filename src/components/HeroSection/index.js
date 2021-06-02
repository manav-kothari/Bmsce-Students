import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loop
          autoPlay
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
