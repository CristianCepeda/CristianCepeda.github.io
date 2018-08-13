import React, { Component} from 'react'

const pageCSS = {
  display: 'grid',
  padding: '0px',
  height: '80vh',
  backgroundColor: '#005b96',
  fontSize: '25px'
}
const centerText = {
  textAlign: 'center',
  margin: 'auto'
}

class Skills extends Component {
  render () {
    return (
      <div style={pageCSS}>
        <p className='mt-5' style={centerText}>Fluent in these technologies</p>
      </div>
    )
  }
}

export default Skills
