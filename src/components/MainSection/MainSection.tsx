import "./MainSection.scss";
import promo from "../../assets/promo/promo.gif";
import arrow from "../../assets/png/arrow.png";
import flower from "../../assets/png/flower.png";
import stars from "../../assets/png/stars.png";
import star from "../../assets/png/star.png";
import { ReactComponent as Down } from "../../assets/svg/down.svg";

export default function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section__header">
        <div className="main_section__header__title">
          <p>Welcome to IWTLNOW</p>
          <p id="blue">Learning Has Never Been More Easier</p>
        </div>
      </div>
      <div className="main_section__image_container">
        <div
          style={{
            backgroundImage: `url(${promo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "85%",
            aspectRatio: "800/556",
            position: "relative",
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
        <p>Explore Now</p>
        <Down></Down>
      </div>
      <div className="main_section__images">
        <img src={flower} alt="" className="main_section__images__flower"></img>
        <img src={stars} alt="" className="main_section__images__stars"></img>
        <img src={star} alt="" className="main_section__images__star"></img>
      </div>
    </div>
  );
}
