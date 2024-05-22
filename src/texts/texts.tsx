import { FeatureItem } from "../types/FeatureItem";

export const features: FeatureItem[] = [
  {
    image: require("../assets/png/mainSection.png"),
    description: (
      <>
        <div>
          We are building tools to help make learning accessible to everyone.
          Our first one is IWTLNOW (IWTL is the commonly used internet acronym
          for I Want To Learn). Learning something from scratch can be tough and
          confusing. Where do you start? Which direction do you explore first?
          ChatGPT and other AI models have now made it easy to ask questions
          about just about anything and learn.
        </div>

        <div>
          As revolutionary as they are, chat interfaces are too linear and
          tedious to learn any reasonably complex idea or concept. They tend to
          be multi-dimensional, and chat isn't.
        </div>
        <div>
          We are making IWTLNOW a hybrid mind-map tool, a learning map creator,
          with a rich interface to help learners discover directions, explore
          them at different levels, access resources, and test their
          understanding - all in one place.
        </div>
      </>
    ),
  },
];
