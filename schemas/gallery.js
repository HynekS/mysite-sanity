import { IoImagesOutline } from "react-icons/io5"

export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  icon: IoImagesOutline,
  fields: [
    {
      name: "images",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "figure",
        },
      ],
    },
  ],
}
