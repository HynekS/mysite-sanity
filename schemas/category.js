import { HiOutlineColorSwatch } from "react-icons/hi"

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: HiOutlineColorSwatch,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
    },
  ],
}
