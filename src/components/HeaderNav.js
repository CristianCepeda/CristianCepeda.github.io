import React, { Component } from 'react'

const colorSchema = {
  backgroundColor: '#6497b1'
}

class HeaderNav extends Component {
  render () {
    return (
      <nav className='navbar' style={colorSchema}>
        <h2 className='nav-brand'>Cristian Cepeda</h2>
        <button type='button' className='navbar-toggler btn bg-transparent' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <i className='material-icons'>menu</i>
        </button>

        <div className='collapse navbar-collapse' id='navbarToggler'>
          <div className='row collapse navbar-collapse' id='navbarToggler' >

            <div className='col'>
              <p className=''>About</p>
            </div>

            <div className='col'>
              <p className=''>Projects</p>
            </div>

            <div className='col'>
              <p className=''>Projects</p>
            </div>

            <div className='col'>
              <p className=''>Contact</p>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default HeaderNav

/*
<nav className='navbar' style={colorSchema}>
  <h2 className='nav-brand'>Cristian Cepeda</h2>
  <button type='button' className='btn bg-transparent' data-toggle='collapse' data-target='#navbarTpggler' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
    <i className='material-icons'>menu</i>
  </button>
  <div className='collapse navbar-collapse' id='navbarToggler'>
    <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
      <li className='nav-item active'>
        <a className='nav-link' href='#'>Home</a>
      </li>
    </ul>
  </div>
</nav>




<header>
  <div className='container-fluid mt-3 ml-4'>
    <div className='row'>
      <div className='col-md-4'>
        <h2 className=''>Cristian Cepeda</h2>
      </div>
      <div className='col-sm-8'>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='row collapse navbar-collapse' id='navbarToggler' >

          <div className='col'>
            <p className=''>About</p>
          </div>

          <div className='col'>
            <p className=''>Projects</p>
          </div>

          <div className='col'>
            <p className=''>Projects</p>
          </div>

          <div className='col'>
            <p className=''>Contact</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</header>
*/
