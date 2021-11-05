import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"

import blockContent from "./blockContent"
import category from "./category"
import post from "./post"
import author from "./author"
import aboutMeSingleton from "./about-me-singleton"
import twitter from "./twitter"
import youtube from "./youtube"
import gotcha from "./gotcha"
import styledList from "./styledList"
import simplePortableText from "./simplePortableText"
import figure from "./figure"
import blockQuote from "./blockQuote"
import gallery from "./gallery"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    author,
    category,
    blockContent,
    aboutMeSingleton,
    figure,
    twitter,
    youtube,
    gotcha,
    styledList,
    simplePortableText,
    blockQuote,
	gallery,
  ]),
})
