// @ts-check
import React, { useState, useEffect } from "react"
import tw from "twin.macro"
import { Global } from "@emotion/react"

const bearerToken =
  process.env.SANITY_STUDIO_TWITTER_API_BEARER_TOKEN ||
  process.env.NEXT_PUBLIC_TWITTER_API_BEARER_TOKEN

const TwitterEmbedPreview = ({ value: { id }, _key }) => {
  // console.log(props)
  const [tweet, setTweet] = useState(null)
  const [error, setError] = useState(null)

  const parseId = userInput => {
    // prettier-ignore
    const twitterUrlRegex = RegExp(/https?:\/\/twitter\.com\/\w+\/status\/\d+/, "gi")
    return twitterUrlRegex.test(userInput) ? userInput.slice().split("/").pop() : userInput
  }

  useEffect(() => {
    if (id) {
      let parsedId = parseId(id)

      const myHeaders = new Headers()
      myHeaders.append("Accept", "application/json")
      myHeaders.append("X-Requested-With", "XMLHttpRequest")
      myHeaders.append("Authorization", `Bearer ${bearerToken}`)

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }

      const params = {
        "media.fields": "type,height,width,preview_image_url",
        expansions: "author_id",
        "tweet.fields": "created_at,entities",
        "user.fields": "username,name,url,description,profile_image_url",
      }

      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/${parsedId}?${Object.entries(
          params,
        )
          .map(([key, value]) => `${key}=${value}`)
          .join("&")}`,
        requestOptions,
      )
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response
        })
        .then(response => response.json())
        .then(result => setTweet(result))
        .catch(error => setError(error.message))
    }
  }, [id])

  switch (true) {
    case Boolean(error): {
      return (
        <div>
          <h2>An error occured</h2>
          {JSON.stringify(error, null, 2)}
        </div>
      )
    }
    case Boolean(tweet): {
      const {
        includes: { users = [] },
        data: {
          id = "",
          created_at = "",
          text = "",
          entities: { hashtags = [] },
        },
      } = tweet

      const { id: userId, username, name, profile_image_url } = users[0] || {}

      return (
        <div tw="bg-gray-900 rounded">
          {JSON.stringify(typeof _key, null, 2)}
          <div tw="flex flex-shrink-0 p-4 pb-0">
            <a href={`https://twitter.com/${userId}/statuses/${id}`}></a>
            <div className="group" tw="flex-shrink-0 block">
              <div tw="flex items-center">
                <div>
                  <img
                    tw="inline-block h-10 w-10 rounded-full"
                    src={profile_image_url}
                    alt="Twitter user profile image"
                  />
                </div>
                <div tw="ml-3">
                  <p tw="text-base leading-6 font-medium text-white">
                    {name}
                    {" "}
                    <span tw="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @{username} . {new Date(created_at).toLocaleDateString("en-GB")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div tw="pl-16">
            <p tw="text-base w-auto font-medium text-white flex-shrink">
              {text}
              {Boolean(hashtags.length) && (
                <span tw="block">
                  {hashtags.map(hashtag => (
                    <span tw="text-blue-400 mr-2" key={hashtag.tag}>
                      #{hashtag.tag}
                    </span>
                  ))}
                </span>
              )}
            </p>
          </div>
          <hr tw="border-gray-600"></hr>
        </div>
      )
    }

    case Boolean(id): {
      return <div>Loading tweet…</div>
    }
    default: {
      return <div>Please enter a tweet id or a tweet url</div>
    }
  }
}

export default TwitterEmbedPreview
