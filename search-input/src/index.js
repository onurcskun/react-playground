import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }

    this.data = ['a','ab','abc','abcd','abcde'];
  }

  render(){
    const filteredResults = this.data.filter(e => e.includes(this.state.query));
    return(
      <div>
          <form>
            <input
              placeholder="search"
              ref={(i) => this.newInput = i}
              onChange={e => this.setState({ query: e.target.value })}/>
            <ul>
              {this.state.query && filteredResults.map(e => <li key={e}>{e}</li>)}
            </ul>
          </form>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('wrapper')
)
