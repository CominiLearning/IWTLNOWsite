import { RefObject } from "react";
import "./Announcement.scss";

interface AnnouncementProps {
  children: JSX.Element;
  divRef: RefObject<HTMLDivElement>;
}

export default function Announcement({ children, divRef }: AnnouncementProps) {
  return (
    <div className="table_column" ref={divRef}>
      <div className="table_column__header">Overview</div>

      <div className="table_column__content">{children}</div>
    </div>
  );
}
