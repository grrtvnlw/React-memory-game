import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const title = "Card Title";
    return (
      <div className="Card">
        { this.props.title }
        <br></br>
        { this.props.likes >= 0 ? (
          <sup>likes: { this.props.likes }</sup>
        ) : ''}        
      </div>
    )
  }
}

export default Card;