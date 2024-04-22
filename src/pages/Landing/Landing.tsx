import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import { features } from "../../texts/texts";
import "./Landing.scss";

export default function Landing() {
  return (
    <>
      <MainSection></MainSection>
      {features.map((feature, index) => {
        return (
          <>
            <Features key={index} {...feature} />
            <div className="line"></div>
          </>
        );
      })}
      <Footer></Footer>
    </>
  );
}
