import React from 'react'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className='about container'>
        <h1 className='about-header'>Levels Beyond Notes React App</h1>
        <p className='about-desc'>This app calls the GitHub issues Api for the Angualar Repo. The App is built in React and the repo can be found <a className='blue' href='https://github.com/Pleeper228/levelsbeyond-angular-issues-ui' target='_blank' rel='noopener noreferrer'>here.</a> The app was built as part of a coding challenge for Levels Beyond.</p>
      </div>
    )
  }
}

export default About
