import S from "@sanity/desk-tool/structure-builder"
import { HiOutlineInformationCircle } from "react-icons/hi"

const hiddenDocTypes = listItem => !["about"].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Me")
        .icon(HiOutlineInformationCircle)
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("4fa180d6-f2c4-465b-a37f-27642add5cba"),
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
