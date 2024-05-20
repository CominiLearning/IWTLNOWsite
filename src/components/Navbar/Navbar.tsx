import "./Navbar.scss";
import { useState } from "react";
import bars from "../../assets/svg/bars.svg";
import close from "../../assets/svg/close.svg";
import { ReactComponent as Refresh } from "../../assets/svg/refresh.svg";
import { ReactComponent as Feature } from "../../assets/svg/feature.svg";

export default function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
      isExpanded: true,
    },
    {
      name: (
        <div className="nav-item">
          <Feature></Feature>
          Feature Rollouts
        </div>
      ),
      href: "#features",
      isExpanded: false,
    },
    {
      name: (
        <div className="nav-item">
          <Refresh></Refresh>Request a feature
        </div>
      ),
      href: "#features",
      isExpanded: false,
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar_brand">
          <div className="navbar_brand__logo"></div>
          <div className="navbar_brand__title cursive">IWTLNOW</div>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__items">
          {links.map((link, index) => {
            if (link.isExpanded) {
              return "";
            }
            return (
              <a
                href={link.href}
                rel="noreferrer"
                className="navbar__right__items__item"
                key={index}
                id="item"
              >
                {link.name}
              </a>
            );
          })}
          <div className="navbar__right__items__item" id="icon">
            <img
              src={bars}
              alt="bars"
              onClick={() => {
                setMenuExpanded((prev) => !prev);
              }}
            ></img>
          </div>
        </div>
      </div>
      <div className={"navbar__menu_expanded" + (menuExpanded ? " show" : "")}>
        <div className="navbar__menu_expanded__title">
          <div className="navbar__menu_expanded__title__left">Recenter</div>
          <div className="navbar__menu_expanded__title__right">
            <img
              src={close}
              alt="close"
              onClick={() => {
                setMenuExpanded((prev) => !prev);
              }}
            ></img>
          </div>
        </div>
        <div className="navbar__menu_expanded__items">
          {links.map((link, index) => {
            return (
              <a
                href={link.href}
                rel="noreferrer"
                className="navbar__menu_expanded__items__item"
                key={index}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="navbar__menu_expanded__line"></div>
      </div>
    </div>
  );
}
