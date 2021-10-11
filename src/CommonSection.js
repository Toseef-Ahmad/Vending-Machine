import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './CommonSection.css';

class CommonSection extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    message: 'Wow its working',
  };
  render() {
    return (
      <>
        <div className="CommonSection-container">
          <h2>{this.props.message}</h2>
          {this.props.isActive && (
            <button onClick={this.props.function}>{this.props.name}</button>
          )}
          <Link to="/">GO Back</Link>
        </div>
      </>
    );
  }
}

export default CommonSection;
