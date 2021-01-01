import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Thing = (props) => {
  const [thing, setThing] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/things/${slug}`

    axios.get(url)
      .then(resp => setThing(resp.data))
      .catch(resp => console.log(resp))
  }, [])

  return (
    <div className="wrapper">
      <div className="column">
        <div className="header"></div>
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[Review Form goes here.]</div>
      </div>
    </div>
  )
}

export default Thing;