// @ts-check
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"
import querystring from "querystring"
import PatchEvent, { set, unset, setIfMissing } from "part:@sanity/form-builder/patch-event"
import TextInput from "part:@sanity/components/textinputs/default"
import Fieldset from "part:@sanity/components/fieldsets/default"
import { FormBuilderInput, patches, withDocument } from "part:@sanity/form-builder"

const TwitterInput = forwardRef((props, ref) => {
  const { focusPath, level, markers, onChange, type, value } = props

  const initialId = value && value.id ? value.id : ""
  const initialBody = value && value.body ? value.body : ""
  const TWITTER_API_BEARER_TOKEN = process.env.SANITY_STUDIO_TWITTER_API_BEARER_TOKEN
  const HEROKU_PROXY_URL = process.env.SANITY_STUDIO_HEROKU_PROXY_URL

  const [id, setId] = useState("")
  const [tweet, setTweet] = useState(initialBody)
  const [error, setError] = useState(null)

  const idInputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: idInputRef.current.focus,
  }))

  useEffect(() => {
    console.log(id)
    const getTweet = async id => {
      const queryParams = querystring.stringify({
        ids: id,
        expansions:
          "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
        "tweet.fields":
          "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
        "user.fields": "id,name,profile_image_url,protected,url,username,verified",
        "media.fields":
          "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
      })

      const response = await fetch(
        `${HEROKU_PROXY_URL}/https://api.twitter.com/2/tweets?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${TWITTER_API_BEARER_TOKEN}`,
          },
        },
      )

      if (response.ok) {
        const parsedResponse = await response.json()
        console.log(parsedResponse)

        console.log("response.ok")
        const transformed = parsedResponse.data.reduce((allTweets, tweet) => {
          const tweetWithAuthor = Object.assign({}, tweet, {
            /*
            media:
              (tweet &&
                tweet.attachments &&
                tweet.attachments.media_keys &&
                tweet.attachments.media_keys.map(key =>
                  parsedResponse.includes.media.find(media => media.media_key === key),
                )) ||
              [],
              */
            //referenced_tweets: getReferencedTweets(tweet),
            author: parsedResponse.includes.users.find(user => user.id === tweet.author_id),
          })

          //author: getAuthorInfo(tweet.author_id)

          return [tweetWithAuthor, ...allTweets]
        }, [])

        setTweet(transformed)
        onChange(
          PatchEvent.from([
            setIfMissing({ _type: type.name }),
            set(id, ["id"]),
            set(JSON.stringify(transformed), ["body"]),
          ]),
        )
      } else {
        setTweet("")
        setError(error.text())
      }
    }

    getTweet(id)
  }, [id])

  // TODO display initial tweet if there is no tweet in state
  return (
    <Fieldset description={type.description} legend={type.title} markers={markers || []}>
      <TextInput
        ref={idInputRef}
        onChange={event => {
          setError(null)
          setId(event.target.value)
        }}
        placeholder="Load tweet by ID"
        type="text"
        value={id || initialId}
      />
      {tweet && <div>{JSON.stringify(tweet, null, 2)}</div>}
      {error && (
        <div>
          <h3>{error.title}</h3>
          {error.errors && error.errors.map((err, i) => <p key={i}>{err.message}</p>)}
        </div>
      )}
    </Fieldset>
  )
})

TwitterInput.displayName = "TwitterInput"

export default TwitterInput
