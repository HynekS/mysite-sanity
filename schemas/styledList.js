import { IoListOutline } from "react-icons/io5"

export default {
  name: "styledList",
  title: "Styled list",
  type: "object",
  icon: IoListOutline,
  fields: [
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Pros", value: "pros" },
          { title: "Cons", value: "cons" },
          { title: "Prerequisites", value: "prerequisities" },
        ],
      },
    },
    {
      title: "Styled list items",
      name: "styledListItems",
      type: "array",
      of: [
        {
          type: "object",
          title: "Styled list item",
          name: "styledlistItem",
          fields: [
            {
              title: "Body",
              name: "body",
              type: "simplePortableText",
            },
          ],
        },
      ],
    },
  ],
}
