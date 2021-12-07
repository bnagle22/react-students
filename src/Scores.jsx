import React from 'react'

const Scores = (props) => {
  const scores = props.scores.map((ele, index) => {
    return(
      <div>
        <p>Date: {ele.date}</p>
        <p>Score: {ele.score}</p>
      </div>
    )
  })

  return (
    <div>
      {scores}
    </div>
  )
}

export default Scores