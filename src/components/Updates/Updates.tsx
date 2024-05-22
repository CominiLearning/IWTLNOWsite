import { useEffect, useRef, useState } from "react";
import { updates } from "../../texts/updates";
import "./Updates.scss";
import useOnScreen from "../../hooks/isInView";

export default function Updates() {
  const updatesRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isVisible = useOnScreen(updatesRef);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (!isHovered && isVisible) {
      intervalId = setInterval(() => {
        if (updatesRef.current) {
          updatesRef.current.scrollTop += 1;
        }
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isHovered, isVisible]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="updates_section">
      <div className="updates_section__header">
        <div className="updates_section__header__title">Updates</div>
      </div>
      <div
        className="updates_section__updates"
        ref={updatesRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {updates.map((update, index) => {
          return (
            <div className="updates_section__updates__item" key={index}>
              {update}
            </div>
          );
        })}
      </div>
    </div>
  );
}
