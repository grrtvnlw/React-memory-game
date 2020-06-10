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

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>
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
