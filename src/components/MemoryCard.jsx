import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  render() {
    let innerClass = 'MemoryCard_inner';

    if (this.props.isFlipped) {
      innerClass += ' flipped';
    }

    return (
      <div>
        <div className="MemoryCard" onClick={ this.props.pickCard }>
          <div className={ innerClass }>
            <div className="MemoryCard_back">
              <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
            </div>
            <div className="MemoryCard_front">
              { this.props.symbol }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MemoryCard;