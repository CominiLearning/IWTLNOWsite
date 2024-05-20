import "./Announcement.scss";

interface AnnouncementProps {
    children: JSX.Element;
  }


export default function Announcement({children} : AnnouncementProps) {
    return  <div className="table_column">
    <div className="table_column__header">Overview</div>

    <div className="table_column__content">
        {children}
    </div>
  </div>
};
