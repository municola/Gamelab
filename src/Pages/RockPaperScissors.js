import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import GameButton from '../Components/GameButton';
import WinLoseTieButton from '../Components/WinLoseTieButton';
import Header from '../Components/Header';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#52CAFF',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexchild: {
    padding: '70px',
  },
  go: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0px',
    padding: '60px',
    backgroundColor: '#15ADFF',
  },
};

export default class RockPaperScissors extends Component {
  constructor() {
    super();
    this.state = {
      result: 'Go',
    };
  }

  @autobind
  getRandom1() {
    // Rock = 1, Paper = 2, Scissors = 3
    const min = Math.ceil(0);
    const max = Math.floor(3);
    const x = Math.floor(Math.random() * (max - min)) + min;
    if (x === 2) {
      return this.setState({ result: 'Tie (Rock)' });
    }
    if (x === 1) {
      return this.setState({ result: 'Lost (Paper)' });
    }
    if (x === 0) {
      return this.setState({ result: 'Won (Scissors)' });
    }
    return false;
  }

  @autobind
  getRandom2() {
    // Rock = 1, Paper = 2, Scissors = 3
    const min = Math.ceil(0);
    const max = Math.floor(3);
    const x = Math.floor(Math.random() * (max - min)) + min;
    if (x === 2) {
      return this.setState({ result: 'Won (Rock)' });
    }
    if (x === 1) {
      return this.setState({ result: 'Tie (Paper)' });
    }
    if (x === 0) {
      return this.setState({ result: 'Lost (Scissors)' });
    }
    return false;
  }

  @autobind
  getRandom3() {
    // Rock = 1, Paper = 2, Scissors = 3
    const min = Math.ceil(0);
    const max = Math.floor(3);
    const x = Math.floor(Math.random() * (max - min)) + min;
    if (x === 2) {
      return this.setState({ result: 'Lost (Rock)' });
    }
    if (x === 1) {
      return this.setState({ result: 'Won (Paper)' });
    }
    if (x === 0) {
      return this.setState({ result: 'Tie (Scissors)' });
    }
    return false;
  }

  render() {
    return (
      <div style={style.container} >
        <Header title={'Rock Paper Scissors'} />
        <div style={style.main}>
          <div style={style.flexchild} >
            <GameButton title="Rock" change={this.getRandom1} />
          </div>
          <div style={style.flexchild} >
            <GameButton title="Paper" change={this.getRandom2} />
          </div>
          <div style={style.flexchild}>
            <GameButton title="Scissor" change={this.getRandom3} />
          </div>
        </div>
        <div style={style.go}>
          <WinLoseTieButton title={this.state.result} />
        </div>
      </div>
    );
  }
}
