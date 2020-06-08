import React, { Component } from 'react';
import numeral from 'numeral';

import './Card.css';

class Card extends Component {
  render() {
    const formattedLikes = numeral(this.props.likes).format('0.0a');
    return (
      <div className="Card">
        { this.props.name }
        <br></br>
        { this.props.likes >= 0 ? (
          <sup>likes: { formattedLikes }</sup>
        ) : ''}        
      </div>
    )
  }
}

export default Card;