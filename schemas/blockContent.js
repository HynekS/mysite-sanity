export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Superscript",
            value: "sup",
            blockEditor: {
              icon: () => (
                <span style={{ fontSize: "0.8em " }}>
                  X<sup>2</sup>
                </span>
              ),
            },
          },
          {
            title: "Subscript",
            value: "sub",
            blockEditor: {
              icon: () => (
                <span style={{ fontSize: "0.8em " }}>
                  X<sub>2</sub>
                </span>
              ),
            },
          },
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
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Code block",
      name: "code",
      type: "code",
      options: {
        withFilename: true,
      },
    },
    {
      type: "figure",
    },
    {
      type: "twitter",
    },
    {
      type: "youtube",
    },
    {
      type: "gotcha",
    },
    {
      type: "styledList",
    },
    {
      type: "blockQuote",
    },
    {
      type: "gallery",
    },
  ],
}
