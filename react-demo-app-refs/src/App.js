import React from 'react';
import './App.css';
import Superhero from './Superhero';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.superheroElement = React.createRef();
  }
  handleClick = () => {
    this.superheroElement.current.changeName();
  };
  render() {
    return (
      <div className="App">
        <Superhero ref={this.superheroElement} />
        <button onClick={this.handleClick}>Show real name</button>
      </div>
    );
  }
}

export default App;
