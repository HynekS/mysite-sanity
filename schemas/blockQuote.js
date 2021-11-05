import { RiChatQuoteLine } from "react-icons/ri"

export default {
  name: "blockQuote",
  title: "Blockquote",
  type: "object",
  icon: RiChatQuoteLine,
  fields: [
    {
      title: "Simple Portable Text",
      name: "simplePortableText",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      title: "Citation",
      name: "citation",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [
              {
                title: "cite",
                value: "cite",
                blockEditor: {
                  icon: () => <span style={{ fontSize: "0.8em " }}>Q</span>,
                },
              },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
}
