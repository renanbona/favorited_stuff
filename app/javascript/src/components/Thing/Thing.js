import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #efefef;
`

const ThingLogo = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`

const ThingName = styled.div`
  padding: 20px 0 10px 0;
`

const ThingWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Thing = (props) => {
  return (
    <Card>
      <ThingLogo>
        <img src={props.attributes.image_url} alt="props.attributes.name" />
      </ThingLogo>
      <ThingName>{props.attributes.name}</ThingName>
      <div className="thing-score">{props.attributes.avg_score}</div>
      <ThingWrapper>
        <Link to={`/things/${props.attributes.slug}`}>Saiba mais</Link>
      </ThingWrapper>
    </Card >
  )
}

export default Thing;