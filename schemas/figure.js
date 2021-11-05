import { IoImageOutline } from "react-icons/io5"

export default {
  name: "figure",
  title: "Figure",
  type: "image",
  icon: IoImageOutline,
  options: {
    hotspot: true,
    metadata: ["lqip"],
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
      validation: Rule =>
        Rule.required().warning(
          "Alternative texts are very important for SEO and accessiblity and should not be omitted",
        ),
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
}
