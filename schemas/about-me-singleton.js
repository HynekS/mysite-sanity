import { HiOutlineInformationCircle } from "react-icons/hi"

export default {
  title: "About Me",
  name: "about",
  type: "document",
  __experimental_actions: ["update", "publish"],
  icon: HiOutlineInformationCircle,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: Rule => Rule.required(),
    },
  ],
}
