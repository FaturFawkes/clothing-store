import React, { Component } from 'react'

export class Jumbotron extends Component {
  render() {
    return (
        <div className="hero min-h-screen my-2" style={{backgroundImage: 'url(https://images.vexels.com/content/270442/preview/south-carolina-map-landscape-t-shirt-design-594bd4.png)'}}>
          <div className="hero-content"></div>
          <div className="hero-content text-center flex content-start text-neutral-content">
              <div className="max-w-md">
              </div>
          </div>
        </div>
    )
  }
}

export default Jumbotron