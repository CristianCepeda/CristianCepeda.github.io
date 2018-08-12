import React, { Component } from 'react';

class HeaderNav extends Component {
  render() {
    return (
      <header>
        <div className="mt-3 ml-4">
          <div className="row">
            <div className="col-sm-4">
              <p className="">Cristian Cepeda</p>
            </div>
            <div className="col-sm-8">
              <div className="row">

              <div className="col">
                <p className="">About</p>
              </div>

              <div className="col">
                <p className="">Projects</p>
              </div>

              <div className="col">
                <p className="">Projects</p>
              </div>

              <div className="col">
                <p className="">Contact</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderNav;
