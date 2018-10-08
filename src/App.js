import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Results from './components/Results'
import About from './components/About'
import {HashRouter as Router, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/angular/angular/issues')
      .then(res => res.json())
      .then(res => {
        this.setState({
          issues: res
        })
      })
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className='app'>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={() => <Results issues={this.state.issues}/>} />
            <Route path='/about' component={About} />
            <Route path='/' component={Footer} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
