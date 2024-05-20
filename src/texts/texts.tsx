import { FeatureItem } from "../types/FeatureItem";

export const features: FeatureItem[] = [
  {
    image: require("../assets/png/mainSection.png"),
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
      </>
    ),
  },
];
