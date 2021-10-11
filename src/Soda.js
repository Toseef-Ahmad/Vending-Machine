import React, { Component } from 'react';
import CommonSection from './CommonSection';

import './Soda.css';
class Soda extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Soda-container">
          <h1>Soda </h1>
          <div className="Soda-img">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3082/3082015.png"
              alt="soda-img"
            />
            <CommonSection />
            <img
              src="https://freesvg.org/img/1529266193.png"
              alt="soda-can"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Soda;
