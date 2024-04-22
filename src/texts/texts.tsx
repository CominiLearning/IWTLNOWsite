import { FeatureItem } from "../types/FeatureItem";

export const features: FeatureItem[] = [
  {
    image: require("../images/png/mainSection.png"),
    description: (
      <>
        <div>
          Hey all! We are building tools to help make learning accessible to
          everyone. Our first is IWTLNOW (IWTL is the commonly used internet
          acronym for I Want To Learn). Learning something from scratch can be
          daunting. ChatGPT and other AI models have now made it easy to ask
          questions about just about anything and learn.
        </div>

        <div>
          As revolutionary as they are, a chat interface is too linear and
          tedious to learn any reasonably complex idea or concept. They tend to
          be multi-dimensional, and chat isn't great to handle that.
        </div>
        <div>
          We are making IWTLNOW a hybrid mind-mapping tool with a rich interface
          to help learners explore directions, at different levels, access
          resources, and test their understanding - all in one place.
        </div>
        <div>Here's a sneak peak.</div>
      </>
    ),
  },
  {
    description: (
      <>
        <div>
          We would love to know how this could help you. What are your learning
          habits and methods like? Please fill out this form and let us know
        </div>

        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdriu0wuCaEvMkcfM8gonrIkybFOb66Xdw6D1wvn8lO7qvZiw/viewform?embedded=true"
            width="100%"
            height="381"
            title="IWTLNOW Feedback Form"
          >
            Loading…
          </iframe>
        </div>
      </>
    ),
  },
  {
    description: (
      <>
        <div>
          <strong>Feature Requests</strong>
        </div>
        Do you have any special feature requests? Any one thing you would really
        like us to add? Please let us know on our Discord Channel!
      </>
    ),
  },
  {
    description: (
      <>
        <div>
          <strong>Updates</strong>
        </div>
        19th April, 2024 - Launched the site to start building in the open!
      </>
    ),
  },
];
