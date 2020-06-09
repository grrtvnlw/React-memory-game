import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  render() {
    return (
      <div>
        <div className="MemoryCard">
          <div className="MemoryCard_inner">
            <div className="MemoryCard_back">
              <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
            </div>
            <div className="MemoryCard_front">
              ∆
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MemoryCard;