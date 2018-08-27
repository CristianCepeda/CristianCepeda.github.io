import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'

/* PAGES */
import Home from '../pages/Home'
import Skills from '../pages/Skills'

/* App Styles */
const webPageStyles = {
  fontFamily: 'Comfortaa, cursive',
  backgroundColor: '#F7F9F9',
  margin: '0px',
  padding: '0px'
}
class App extends Component {
  render () {
    return (
      <div style={webPageStyles}>
        <HeaderNav />
        <Home />
        <Skills />
      </div>
    )
  }
}

export default App
