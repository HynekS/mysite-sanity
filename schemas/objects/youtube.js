import React from "react"

const YouTubePreview = ({ value }) => {
  let { url } = value
  return (
    <iframe
      title="Youtube preview"
      src={url.replace("watch", "embed")}
      frameBorder="0"
      allow="accelerometer"
    ></iframe>
  )
}

export default YouTubePreview
