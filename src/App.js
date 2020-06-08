import React from 'react';
import logo from './logo.svg';

import Card from './components/Card'

import './App.css';

function App() {
  const projects = [
    { name: 'Project Awesome', likes: 10 },
    { name: 'Project Awesomest', likes: 8 },
    { name: 'The REAL Project Awesome', likes: 4 },
    { name: 'Project Sparkles', likes: 6 },
    { name: 'BreakfastTime', likes: 2 },
    { name: 'Eggz.io', likes: 1 },
    { name: 'MakinBaconPancakes', likes: 9001 },
  ];

  return (
    <div className="App">
      { projects.map((project, index) => {
        return <Card
        name={project.name}
        key={index}
        likes={project.likes}
        ></Card>
      })}
    </div>
  );
}

export default App;
