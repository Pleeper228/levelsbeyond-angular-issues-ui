import React from 'react'
import { Markdown } from 'react-showdown';
import './result.css'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div className='issue'>
        <div className='issue-header'>
          <div>
            <p className='issue-title' onClick={this.toggleActive}>{this.props.issue.title}</p>
            <p className='issue-subtitle'>#{this.props.issue.number} updated on {this.props.issue.updated_at} by <a className='username' href={this.props.issue.user.html_url} target='_blank' rel="noopener noreferrer">{this.props.issue.user.login}</a></p>
            <a className='' href={this.props.issue.html_url}>Link to PR on GitHub</a>
          </div>
          { this.state.active ? <p className='x' onClick={this.toggleActive}>X</p> : null }
        </div>
        { this.state.active ? <Markdown markdown={this.props.issue.body} /> : null }
      </div>
    )
  }
}

export default Result
