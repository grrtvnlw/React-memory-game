import React from 'react';
import logo from './logo.svg';

import Card from './components/Card'

import './App.css';

function App() {
  return (
    <div className="App">
      <Card title="Project Awesome" likes={0}></Card>
      <Card title="Project Awesomest"></Card>
      <Card title="The REAL Project Awesome"></Card>
      <Card title="The REAL REAL Project Awesome"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default App;
