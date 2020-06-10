import React, { Component } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck() {
  // const symbols = [∆, ß, £, §, •, $, ≠, ø];
  let symbols = ['🚀', '🍺', '💻', '🥑', '🍄', '🍀', '🦊', '💜'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i%8]
    })
  }

  return shuffle(deck);
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super()

    this.state = { 
      deck: generateDeck(),
      pickedCards: []
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    
    let cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    if (newPickedCards.length == 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];

      if (newDeck[card1Index].symbol != newDeck[card2Index].symbol) {
        setTimeout(() => {this.unflipCards(card1Index, card2Index)}, 1000);
      }

      newPickedCards = [];
    }

    this.setState({ deck: newDeck, pickedCards: newPickedCards })
  }

  unflipCards(card1Index, card2Index) {
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};

    card1.isFlipped = false;
    card2.isFlipped = false;

    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      } else if (card2Index === index) {
        return card2;
      }
      return card;
    });

    this.setState({ deck: newDeck });
}

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h4>Match cards to win</h4>
        </header>
        <div className="row">
          { cardsJSX.slice(0,4) }
        </div>
        <div className="row">
          { cardsJSX.slice(4,8) }
        </div>
        <div className="row">
          { cardsJSX.slice(8,12) }
        </div>
        <div className="row">
          { cardsJSX.slice(12,16) }
        </div>
      </div>
    )
  }
}

export default App;
