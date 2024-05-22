import "./MainSection.scss";
import promo from "../../assets/promo/promo.gif";
import arrow from "../../assets/png/arrow.png";
import flower from "../../assets/png/flower.png";
import stars from "../../assets/png/stars.png";
import star from "../../assets/png/star.png";
import { ReactComponent as Down } from "../../assets/svg/down.svg";

interface MainSectionProps {
  scrollToView: () => void;
}

export default function MainSection({ scrollToView }: MainSectionProps) {
  return (
    <div className="main_section">
      <div className="main_section__header">
        <div className="main_section__header__title">
          <p>IWTLNOW - I WANT TO LEARN NOW</p>
          <p id="blue">
            Learning Maps: Mind Maps to make learning simple and intuitive
          </p>
        </div>
      </div>
      <div className="main_section__image_container">
        <div
          style={{
            backgroundImage: `url(${promo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "85%",
            aspectRatio: "720/512",
            position: "relative",
            maxWidth: "800px",
          }}
        >
          <div className="main_section__image_container__images">
            <img
              src={arrow}
              alt=""
              className="main_section__image_container__images__top_left"
            ></img>
            <img
              src={arrow}
              alt=""
              className="main_section__image_container__images__top_right"
            ></img>
            <img
              src={arrow}
              alt=""
              className="main_section__image_container__images__bottom_left"
            ></img>
            <img
              src={arrow}
              alt=""
              className="main_section__image_container__images__bottom_right"
            ></img>
          </div>
        </div>
      </div>
      <div className="main_section__explore_now">
        <div
          className="main_section__explore_now__button"
          onClick={scrollToView}
        >
          <p>Explore Now</p>
          <Down></Down>
        </div>
      </div>
      <div className="main_section__images">
        <img src={flower} alt="" className="main_section__images__flower"></img>
        <img src={stars} alt="" className="main_section__images__stars"></img>
        <img src={star} alt="" className="main_section__images__star"></img>
      </div>
    </div>
  );
}
