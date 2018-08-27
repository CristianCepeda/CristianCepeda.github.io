import React, {Component} from 'react'

const pageCSS = {
  backgroundColor: '#D5DBDB',
  height: '80vh'
}
const welcomeMessagePosition = {
  padding: '3% 3%'
}
const welcomeMessage = {
  margin: '0px',
  fontSize: '45px'
}

class Home extends Component {
  render () {
    return (
      <div className='container-fluid' style={pageCSS}>
        <div style={welcomeMessagePosition}>
          <div>
            <p style={welcomeMessage}>Full Stack Developer <span>👨🏽‍💻</span> from</p>
          </div>
          <div>
            <p style={welcomeMessage}><span>☀️</span>South Florida<span>🌴</span></p>
          </div>
          <div>
            <p>Technology Hacker.</p>
          </div>
        </div>
        <div className='row'>
          <p>Hi</p>
        </div>
      </div>
    )
  }
}

export default Home

/*
-----
🌴
palm tree
Unicode: U+1F334, UTF-8: F0 9F 8C B4
*/
