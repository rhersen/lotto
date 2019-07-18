import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {drawResult: []}
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          lotto-joker
        </p>
        <ol>
          {this.state.drawResult.map(a => <li key={a.type}><span>{a.description}</span>
            <ol>{a.drawNumbers.map(b => <li key={b.type}><span>{b.description}</span>
              <ul>{b.numbers.map(c => <li key={c}>{c}</li>)}</ul>
            </li>)}</ol>
          </li>)}
        </ol>
      </header>
    </div>);
  }

  async componentDidMount() {
    let response = await fetch('/.netlify/functions/node-fetch')
    let json = await response.json()
    let drawResult = json.result.drawResult
    console.log(drawResult);
    this.setState({drawResult})
  }
}

export default App;
