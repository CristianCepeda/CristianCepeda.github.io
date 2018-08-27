import React, { Component} from 'react'

const pageCSS = {
  backgroundColor: '#7F8C8D',
  height: '80vh',
  fontSize: '25px'
}
const centerText = {
  textAlign: 'center',
  margin: 'auto'
}

const imageCSS = {
  color: '#fff',
  fontSize: '100px'
}

const techContainer = {
  display: 'grid',
  gridTemplateColumns: '150px 150px 150px',
  gridTemplateRows: '150px 150px 150px'
}

class Skills extends Component {
  render () {
    return (
      <div style={pageCSS}>
        <p style={centerText}>Fluent in these technologies</p>
        <div className='container' style={techContainer}>
          <i className='devicon-react-original-wordmark' style={imageCSS} />
          <i className='devicon-nodejs-plain-wordmark' style={imageCSS} />
        </div>
      </div>
    )
  }
}

export default Skills
