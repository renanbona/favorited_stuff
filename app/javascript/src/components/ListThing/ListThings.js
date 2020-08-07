import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ListThings = () => {
  const [things, setThings] = useState([])

  useEffect(() => {
    axios.get('/api/v1/things')
      .then(resp => {
        console.log(resp)
      })
      .catch(resp => {
        console.log(resp)
      })
  }, [ListThings.length])


  return (
    <h2>Here are the LIST of all things</h2>
  )
}

export default ListThings;