import Announcement from "../../components/Announcement/Announcement";
import DiscordSection from "../../components/DiscordSection/DiscordSection";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import MainSection from "../../components/MainSection/MainSection";
import Updates from "../../components/Updates/Updates";
import { features } from "../../texts/texts";
import "./Landing.scss";
import plus1 from "../../assets/png/plus-1.png";
import plus2 from "../../assets/png/plus-2.png";
import { useRef } from "react";

export default function Landing() {

  const divRef = useRef<HTMLDivElement>(null);

  function scrollToView() {
    console.log(divRef.current);
    
    divRef.current?.scrollIntoView({
      behavior:"smooth",
    })
  }

  return (
    <div className="landing_page">
      <MainSection scrollToView={scrollToView}></MainSection>
      <div className="landing_page__announcement">
        <Announcement divRef={divRef}>{features[0]}</Announcement>
      </div>
      <div className="landing_page__form">
        <Form></Form>
      </div>
      <div className="landing_page__discord" id="features">
        <DiscordSection></DiscordSection>
      </div>
      <div className="landing_page__updates">
        <Updates></Updates>
        <div className="landing_page__updates__images">
          <img
            src={plus1}
            alt=""
            className="landing_page__updates__images__left"
          ></img>
          <img
            src={plus2}
            alt=""
            className="landing_page__updates__images__right"
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
