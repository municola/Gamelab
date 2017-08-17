import React, { Component } from 'react';
import styles from '../Css/ConnectFour.css';
import ResetButton from '../Components/ResetButton';
import Announcement from '../Components/Announcement';
import Header from '../Components/Header';

const { List } = require('immutable');

const style = {
  container: {
    width: '80%',
    display: 'flex',
    backgroundColor: '#151d25',
    textAlign: 'center',
    flexDirection: 'column',
  },
  parent: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '0px',
  },
  resetButton: {
    backgroundColor: '#52CAFF',
  },
};
export default class ConnectFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      immutableBoard: List.of(
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
      ),
      count: List.of(0),
      winner: false,
      winnerSymbol: '',
      announcement: 'Who will win?',
    };
  }

  reset() {
    this.setState({
      immutableBoard: List.of(
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ',
      ),
      count: List.of(0),
      winner: false,
      winnerSymbol: '',
      announcement: 'Who will win?',
    });
  }

  handleClick(index) {
    this.checkForWinner();
    if (!this.state.winner) {
      if (index > 34 && this.state.immutableBoard.get(index) === ' ') {
        if (this.state.count.get(0) === 0) {
          this.setState({ immutableBoard: this.state.immutableBoard.set(index, 'O') });
          this.setState({ winnerSymbol: 'O won' });
          this.setState({ count: this.state.count.set(0, 0) });
        } else {
          this.setState({ immutableBoard: this.state.immutableBoard.set(index, 'X') });
          this.setState({ winnerSymbol: 'X won' });
          this.setState({ count: this.state.count.set(0, 1) });
        }
      }
      if (this.state.immutableBoard.get(index + 7) !== ' '
        && this.state.immutableBoard.get(index) === ' ') {
        if (this.state.count.get(0) === 1) {
          this.setState({ immutableBoard: this.state.immutableBoard.set(index, 'O') });
          this.setState({ winnerSymbol: 'O won' });
          this.setState({ count: this.state.count.set(0, 0) });
        } else {
          this.setState({ immutableBoard: this.state.immutableBoard.set(index, 'X') });
          this.setState({ winnerSymbol: 'X won' });
          this.setState({ count: this.state.count.set(0, 1) });
        }
      }
    }
  }

  checkForWinner() {
    if (!this.state.winner) {
      this.ckeckHorizontal();
      this.checkVertical();
      this.checkDiagonal1();
      this.checkDiagonal2();
    }
  }

  ckeckHorizontal() {
    let col = 0;
    while (col < 36) {
      for (let sP = 0; sP < 4; sP++) {
        if (this.state.immutableBoard.get(sP + 0 + col) !== ' '
          && this.state.immutableBoard.get(sP + 0 + col) ===
          this.state.immutableBoard.get(sP + 1 + col)
          && this.state.immutableBoard.get(sP + 2 + col) ===
          this.state.immutableBoard.get(sP + 3 + col)
          && this.state.immutableBoard.get(sP + 1 + col) ===
          this.state.immutableBoard.get(sP + 2 + col)) {
          this.setState({ winner: true });
          this.setState({ announcement: this.state.winnerSymbol });
        }
      }
      col += 7;
    }
  }

  checkVertical() {
    let x = 0;
    while (x < 21) {
      for (let sP = 0; sP < 6; sP++) {
        if (this.state.immutableBoard.get(sP + 0 + x) !== ' '
          && this.state.immutableBoard.get(sP + 0 + x) ===
          this.state.immutableBoard.get(sP + 7 + x)
          && this.state.immutableBoard.get(sP + 14 + x) ===
          this.state.immutableBoard.get(sP + 21 + x)
          && this.state.immutableBoard.get(sP + 7 + x) ===
          this.state.immutableBoard.get(sP + 14 + x)) {
          this.setState({ winner: true });
          this.setState({ announcement: this.state.winnerSymbol });
        }
      }
      x += 7;
    }
  }

  checkDiagonal1() {
    let row = 0;
    while (row < 21) {
      for (let sP = 0; sP < 4; sP++) {
        if (this.state.immutableBoard.get(sP + 0 + row) !== ' '
          && this.state.immutableBoard.get(sP + 0 + row) ===
          this.state.immutableBoard.get(sP + 8 + row)
          && this.state.immutableBoard.get(sP + 16 + row) ===
          this.state.immutableBoard.get(sP + 24 + row)
          && this.state.immutableBoard.get(sP + 8 + row) ===
          this.state.immutableBoard.get(sP + 16 + row)) {
          this.setState({ winner: true });
          this.setState({ announcement: this.state.winnerSymbol });
        }
      }
      row += 7;
    }
  }

  checkDiagonal2() {
    let row = 0;
    while (row < 21) {
      for (let sP = 6; sP > 3; sP--) {
        if (this.state.immutableBoard.get(sP + 0 + row) !== ' '
          && this.state.immutableBoard.get(sP + 0 + row) ===
          this.state.immutableBoard.get(sP + 6 + row)
          && this.state.immutableBoard.get(sP + 12 + row) ===
          this.state.immutableBoard.get(sP + 18 + row)
          && this.state.immutableBoard.get(sP + 6 + row) ===
          this.state.immutableBoard.get(sP + 12 + row)) {
          this.setState({ winner: true });
          this.setState({ announcement: this.state.winnerSymbol });
        }
      }
      row += 7;
    }
  }

  render() {
    return (
      <div style={style.container}>
        <Header title={'Connect Four'} />
        <div>
          <Announcement title={this.state.announcement} />
        </div>
        <div style={style.parent}>
          <div className={styles.boardC4}>
            {this.state.immutableBoard.map((cell, index) => {
              return (
                <div
                  onClick={() => this.handleClick(index)}
                  className={styles.squareC4}
                  key={index}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        </div>
        <ResetButton reset={() => this.reset()} />
      </div>
    );
  }
}
