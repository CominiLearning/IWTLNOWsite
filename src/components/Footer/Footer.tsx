import "./Footer.scss";
import { ReactComponent as Refresh } from "../../assets/svg/refresh.svg";
import { ReactComponent as Feature } from "../../assets/svg/feature.svg";


export default function Footer() {
  const links = [
    {
      name: (
        <div className="footer-item">
          <Feature></Feature>
          Feature Rollouts
        </div>
      ),
      href: "#features",
    },
    {
      name: (
        <div className="footer-item">
          <Refresh></Refresh>Request a feature
        </div>
      ),
      href: "#features",
    },
  ];
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__left">IWTLNOW</div>
        <div className="footer__content__right">
          <div className="footer__content__right__items">
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  rel="noreferrer"
                  className="footer__content__right__items__item"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
