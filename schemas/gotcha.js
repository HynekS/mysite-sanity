import { IoWarningOutline } from "react-icons/io5"

export default {
  name: "gotcha",
  title: "Gotcha",
  type: "object",
  icon: IoWarningOutline,
  fields: [
    {
      title: "content",
      name: "body",
      type: "simplePortableText",
    },
  ],
}
