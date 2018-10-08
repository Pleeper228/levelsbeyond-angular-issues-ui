import React from 'react'
import Result from '../Result'
import './results.css'

const Results = (props) => {
  return (
    <div className='container issues'>
      {
        props.issues.map((issue, i) => {
          return <Result key={i} issue={issue} />
        })
      }
    </div>

  )
}

export default Results
