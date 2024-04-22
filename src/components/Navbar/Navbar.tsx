import "./Navbar.scss";
import logo from "../../images/png/logo.png";
import { useState } from "react";
import bars from "../../images/svg/bars.svg";
import close from "../../images/svg/close.svg";

export default function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
      isExpanded: true,
    },
    {
      name: "Feature Rollouts",
      href: "#features",
      isExpanded: false,
    },
    {
      name: "Request a feature",
      href: "#features",
      isExpanded: false,
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar__left__text">IWTLNOW</div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__items">
          {links.map((link) => {
            if (link.isExpanded) {
              return "";
            }
            return (
              <a
                href={link.href}
                rel="noreferrer"
                className="navbar__right__items__item"
                key={link.name}
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
          {links.map((link) => {
            return (
              <a
                href={link.href}
                rel="noreferrer"
                className="navbar__menu_expanded__items__item"
                key={link.name}
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
