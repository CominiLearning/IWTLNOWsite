import "./Form.scss";

export default function Form() {
  return (
    <div className="form">
      <div className="form__header">
        <div className="form__header__title">What would you like?</div>
        <div className="form__header__subtitle">
          We would love to know how this could help you. What are your learning
          habits and methods like? Please fill out this form and let us know
        </div>
      </div>
      <div className="form__form">
        <iframe
          src="https://forms.gle/J14yZxQ8DZgUZTo3A"
          width="100%"
          height="381"
          title="IWTLNOW Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
