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

  toggleActive(e) {
    if (e.target.nodeName === 'A') {
      return
    }
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div className='issue'>
        <div className='issue-header' onClick={this.toggleActive}>
          <div>
            <div>
              <p className='issue-title'>{this.props.issue.title} — </p>
              <a className='blue' target='_blank' rel='noopener noreferrer' href={this.props.issue.html_url}> View on GitHub ⇲</a>
            </div>
            <p className='issue-subtitle'>#{this.props.issue.number} updated on {this.props.issue.updated_at} by <a className='username' href={this.props.issue.user.html_url} target='_blank' rel="noopener noreferrer">{this.props.issue.user.login}</a></p>

          </div>
        </div>
        { this.state.active ? <Markdown markdown={this.props.issue.body} /> : null }
      </div>
    )
  }
}

export default Result
