import React, { Component } from 'react'

const headerNavStyle = {
  backgroundColor: '#F7F9F9',
  padding: '1% 0px'
}

const nameStyle = {
  margin: '0px 0px 0px 13%'
}

const menuListStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  textAlign: 'center',
  marginTop: '10px',
  fontSize: '20px'
}

class HeaderNav extends Component {
  render () {
    return (
      <header className='sticky-top' style={headerNavStyle}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-7'>
              <h2 className='' style={nameStyle}>Cristian Cepeda</h2>
            </div>
            <div className='col-lg-5' style={menuListStyle}>

              <div className='col'>
                <p className=''>About</p>
              </div>

              <div className='col'>
                <p className=''>Projects</p>
              </div>

              <div className='col'>
                <p className=''>Blog</p>
              </div>

              <div className='col'>
                <p className=''>Contact</p>
              </div>

            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default HeaderNav
