import React from "react";
import { Github } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import HomeSection2 from "../components/HomeSection2";
import assets from "../assets/img/assets";
import Title from "../components/Title";
import ThatLot from "../components/ThatLot";
import HomeSection3 from "../components/HomeSection3";
import HomeSection5 from "../components/HomeSection5";
import Achievement from "../components/Achievement";
import ReviewCard from "../components/ReviewCard";
import GitHub from "../components/GitHub";

const Home = () => {
  return (
    <>
      {/* banner  */}
      <HeroBanner
        backgroundImage={assets.Rectangle39}
        title="Empowering Your Business with IT Innovation"
        description="We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation."
      />

      {/* GitHub  */}

      <GitHub />

      {/* Section 2  */}
      <HomeSection2 />

      {/* section 3 */}

      <Title title="Everything You Need To Get Ahead" />
      <HomeSection3
        image1={assets.Rectangle6}
        image2={assets.Rectangle7}
        image3={assets.Img2}
      />

      {/* section 4 */}
      <ThatLot />

      {/* Section 5 */}

      <HomeSection5 />
      <Achievement />

      {/* section 6 */}
      <Title title="Don t just take our word for it.." />
      <ReviewCard />

      {/* section 7 */}
      <ThatLot />
    </>
  );
};

export default Home;
