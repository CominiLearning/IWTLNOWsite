import "./updates.scss";

export const features: JSX.Element[] = [
  <>
    <div>
      We are building tools to help make learning accessible to everyone. Our
      first one is IWTLNOW (IWTL is the commonly used internet acronym for I
      Want To Learn). Learning something from scratch can be tough and
      confusing. Where do you start? Which direction do you explore first?
      ChatGPT and other AI models have now made it easy to ask questions about
      just about anything and learn.
    </div>

    <div>
      As revolutionary as they are, chat interfaces are too linear and tedious
      to learn any reasonably complex idea or concept. They tend to be
      multi-dimensional, and chat isn't.
    </div>
    <div>
      We are making IWTLNOW a hybrid mind-map tool, a learning map creator, with
      a rich interface to help learners discover directions, explore them at
      different levels, access resources, and test their understanding - all in
      one place.
    </div>
    <div className="updates_button">
      <button
        className="updates_button__button"
        onClick={() => {
          window.location.href = "https://iwtlnow.microschools.in/";
        }}
      >
        Try it now!
      </button>
      <p className="updates_button__text">
        Note : This is a very early version and rough around the edges. You will
        need to enter your openai key to try it out or please fill out the form below and we'll grant you early access
      </p>
    </div>
  </>,
];
