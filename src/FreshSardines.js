import React from 'react';
import './FreshSardines.css';
import Message from './Message.js';
import { Link } from 'react-router-dom';

class FreshSardines extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Sardine-Container">
          <div className="Sardine-img">
            <img src="https://freesvg.org/img/fish-ocal.png" alt="" />
          </div>
          <div className="Sardine-heading">
            <Message>
              <h1>Working</h1>
              <Link style={{ color: 'black', fontSize: 28 }} to="/">
                Go Back
              </Link>
            </Message>
          </div>
        </div>
      </>
    );
  }
}

export default FreshSardines;
