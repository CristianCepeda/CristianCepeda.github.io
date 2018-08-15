import React, {Component} from 'react'

const pageCSS = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gridTemplateRows: '20%  auto 20%',
  padding: '0px',
  height: '80vh',
  backgroundColor: '#6497a5'
}
const welcomeMessage = {
  gridColumnStart: '2',
  gridColumnEnd: '3',
  gridRowStart: '2',
  gridRowEnd: '3',
  textAlign: 'center',
  margin: 'auto'
}
class Home extends Component {
  render () {
    return (
      <div className='container-fluid' style={pageCSS}>
        <h5 style={welcomeMessage}>Full Stack Developer</h5>
      </div>
    )
  }
}

export default Home
