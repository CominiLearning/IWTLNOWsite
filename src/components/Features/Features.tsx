import { FeatureItem } from "../../types/FeatureItem";
import "./Features.scss";

export default function Features({ image, description }: FeatureItem) {
  return (
    <div className="features_container">
      <div className="features_container__top">
        <div className="features_container__top__description">
          {description}
        </div>
      </div>
      {image && (
        <div className="features_container__bottom">
          <div className="features_container__bottom__image">
            <img src={image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
