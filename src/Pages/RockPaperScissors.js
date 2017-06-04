import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import GameButton from '../Components/GameButton';
import WinLoseTieButton from '../Components/WinLoseTieButton';
import Header from '../Components/Header';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#151d25',
    width: '80%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '150px',
  },
  youContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whoContainer: {
    display: 'flex',
    width: '200px',
  },
  buttonContainer1: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
    justifyContent: 'space-between',
  },
  buttonContainer2: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
    justifyContent: 'center',
  },
  who: {
    margin: '0px',
    alignSelf: 'center',
    fontSize: '28px',
    color: '#a5b6c3',
  },
  vsContainer: {
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '200px',
    justifyContent: 'center',
  },
  vs: {
    fontSize: '28px',
    color: '#a5b6c3',
  },
  ComputerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    marginLeft: '200px',
    borderBottom: '2px solid #a5b6c3',
    paddingTop: '60px',
  },
  winContainer: {
    marginLeft: '200px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px',
  },
  win: {
    fontSize: '28px',
    color: '#3ab2b2',
  },
};

export default class RockPaperScissors extends Component {
  constructor() {
    super();
    this.state = {
      computer: '?',
      win: '?',
    };
  }

  @autobind
  getRandom1() {
    // Rock = 1, Paper = 2, Scissors = 3
    const min = Math.ceil(0);
    const max = Math.floor(3);
    const x = Math.floor(Math.random() * (max - min)) + min;
    if (x === 2) {
      return this.setState({ computer: 'Rock', win: 'Tie' });
    }
    if (x === 1) {
      return this.setState({ computer: 'Paper', win: 'You Lose' });
    }
    if (x === 0) {
      return this.setState({ computer: 'Scissors', win: 'You win' });
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
      return this.setState({ computer: 'Rock', win: 'You win' });
    }
    if (x === 1) {
      return this.setState({ computer: 'Paper', win: 'Tie' });
    }
    if (x === 0) {
      return this.setState({ computer: 'Scissors', win: 'You lose' });
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
      return this.setState({ computer: 'Rock', win: 'You lose' });
    }
    if (x === 1) {
      return this.setState({ computer: 'Paper', win: 'You win' });
    }
    if (x === 0) {
      return this.setState({ computer: 'Scissors', win: 'Tie' });
    }
    return false;
  }

  render() {
    return (
      <div style={style.container}>
        <Header title={'Rock Paper Scissors'} />
        <div style={style.main}>
          <div style={style.youContainer}>
            <div style={style.whoContainer}>
              <p style={style.who}>You</p>
            </div>
            <div style={style.buttonContainer1}>
              <GameButton title="Rock" change={this.getRandom1} />
              <GameButton title="Paper" change={this.getRandom2} />
              <GameButton title="Scissor" change={this.getRandom3} />
            </div>
          </div>
          <div style={style.vsContainer}>
            <p style={style.vs}>VS</p>
          </div>
          <div style={style.ComputerContainer}>
            <div style={style.whoContainer}>
              <p style={style.who}>Computer</p>
            </div>
            <div style={style.buttonContainer2}>
              <WinLoseTieButton title={this.state.computer} />
            </div>
          </div>
          <div style={style.border} />
          <div style={style.winContainer}>
            <p style={style.win}>{this.state.win}</p>
          </div>
        </div>
      </div>
    );
  }
}
