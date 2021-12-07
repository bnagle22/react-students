import React from 'react'
import Scores from './Scores'
const Students = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h5>{props.bio}</h5>
      <ul>Scores:
        <Scores
        scores={props.scores}/>
      </ul>
    </div>
  )
}

export default Students