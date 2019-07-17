import React, {Component} from 'react';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          lotto-joker
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>);
  }

  async componentDidMount() {
    let response = await fetch('/.netlify/functions/node-fetch')
    console.log(await response.json());
  }
}

export default App;
