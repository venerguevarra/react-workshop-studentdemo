import React from 'react';
import './App.css';
import Badge from './components/Badge';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <Badge user={{
        name: 'Vener Guevarra',
        username: 'vener.guevarra',
        img: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
      }} />,
    </div>
  );
}

export default App;
