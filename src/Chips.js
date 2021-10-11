import React from 'react';
import CommonSection from './CommonSection';
import './Chips.css';

class Chips extends React.Component {
  constructor(props) {
    super(props);
    this.handleChips = this.handleChips.bind(this);
    this.state = {
      chips: [
        {
          marginTop: 100,
          marginLeft: 360,
        },
      ],
    };
  }

  randomMargin(range) {
    return Math.floor(Math.random() * range);
  }

  handleChips() {
    this.setState((prev) => ({
      chips: [
        ...prev.chips,
        {
          marginLeft: this.randomMargin(800),
          marginTop: this.randomMargin(100),
        },
      ],
    }));

    console.log(this.state.chips);
  }

  render() {
    const styles = {
      genChips: {
        width: 100,
        height: 100,
        marginTop: this.state.chips.marginTop,
        marginLeft: this.state.chips.marginLeft,
      },
    };
    return (
      <>
        <div className="Chips-container">
          <div className="Chips-common-section">
            <CommonSection
              message="VENDING-MACHINE"
              function={this.handleChips}
              name="NoM NoM NoM"
              isActive={true}
            />
          </div>
          {this.state.chips.map((c) => {
            return (
              <img
                style={{ marginLeft: c.marginLeft, marginTop: c.marginTop }}
                src="https://freesvg.org/img/Fries.png"
                alt="chips-img"
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Chips;
