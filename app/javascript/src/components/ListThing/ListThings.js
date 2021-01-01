import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Thing from './Thing'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right:auto;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`

const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const ListThings = () => {
  const [things, setThings] = useState([])

  useEffect(() => {
    axios.get('/api/v1/things')
      .then(resp => {
        setThings(resp.data.data)
      })
      .catch(resp => {
        console.log(resp)
      })
  }, [ListThings.length])

  const grid = things.map(item => {
    return (
      <Thing
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Things that I'm enjoying right now</h1>
      </Header>
      <SubHeader>
        A list of random things that I like
      </SubHeader>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default ListThings;