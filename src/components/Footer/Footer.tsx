import "./Footer.scss";

export default function Footer() {
  const links = [
    {
      name: "Feature Rollouts",
      href: "#features",
    },
    {
      name: "Request a feature",
      href: "#features",
    },
  ];
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__left">IWTLNOW</div>
        <div className="footer__content__right">
          <div className="footer__content__right__items">
            {links.map((link) => {
              return (
                <a
                  key={link.name}
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
