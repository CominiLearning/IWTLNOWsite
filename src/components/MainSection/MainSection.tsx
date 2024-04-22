import "./MainSection.scss";
import main_image from "../../images/png/mainSection.png";

export default function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section__header">
        <div className="main_section__header__title">
          <p>Empower Your Learning Journey</p>
          <p id="blue">IWTLNOW</p>
        </div>
        <div className="main_section__header__subtitle">
          <p>
            An innovative learning platform that transforms how you
            approach acquiring knowledge
          </p>
        </div>
      </div>
      <div className="main_section__image_container">
        <img src={main_image} alt=""></img>
      </div>
    </div>
  );
}
