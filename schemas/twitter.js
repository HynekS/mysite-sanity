// @ts-check
import TwitterInput from "./objects/TwitterInput"

export default {
  name: "twitter",
  type: "object",
  title: "Twitter test",
  inputComponent: TwitterInput,
  fields: [
    {
      name: "id",
      type: "string",
      title: "Twitter tweet id",
    },
    {
      name: "body",
      type: "string",
      title: "Body",
      hidden: true,
    },
  ],
}
