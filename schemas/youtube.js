// @ts-check
import YouTubePreview from "./objects/youtube"

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YouTubePreview,
  },
}
