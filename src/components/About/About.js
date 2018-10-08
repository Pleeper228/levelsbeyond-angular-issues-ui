import React from 'react'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className='about container'>
        <h1 className='about-header'>Levels Beyond Notes React App</h1>
        <p className='about-desc'>This app calls the GitHub issues Api for the Angualar Repo.</p>
      </div>
    )
  }
}

export default About
