import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      acc: 1,
      color: 'blue'
    }
  }

  handleClick() {
    this.setState((estado, _props) => {
      if(estado.acc % 2) {
        return {
          acc: estado.acc + 1,
          color: 'green'
        }
      } else {
        return {
          acc: estado.acc + 1,
          color: 'blue'
        }
      }
    });
  }

  render() {
    return (
      <>
        <button style={{backgroundColor: this.state.color}} onClick={this.handleClick}>Estado: {this.state.acc}</button>
      </>
    );
  }
}

export default App;
