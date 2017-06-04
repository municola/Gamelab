import React, { Component } from 'react';

import Announcement from '../Components/Announcement';
import ResetButton from '../Components/ResetButton';
import Header from '../Components/Header';
import styles from '../Css/TicTacToe.css';

const style = {
  container: {
    width: '80%',
    display: 'flex',
    backgroundColor: '#151d25',
    textAlign: 'center',
    flexDirection: 'column',
  },
  board: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      SymbolOne: 'O',
      SymbolTwo: 'X',
      winner: false,
      announcement: 'Who will win?',
      count: 0,
    };
  }

  handleClick(index) {
    this.state.count++;
    if (this.state.gameBoard[index] === ' ' && !this.state.winner) {
      if (this.state.count % 2 === 0) {
        this.state.gameBoard[index] = 'O';
        this.setState({ gameBoard: this.state.gameBoard });
      } else {
        this.state.gameBoard[index] = 'X';
        this.setState({ gameBoard: this.state.gameBoard });
      }
      this.setState({ winner: this.checkForWinner() });
    }
  }

  checkForWinner() {
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                           [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const symbols = this.state.gameBoard;
    return winningCombos.find((combo) => {
      if (symbols[combo[0]] !== ' ' && symbols[combo[1]] !== ' '
        && symbols[combo[2]] !== ' ' && symbols[combo[0]] === symbols[combo[1]]
        && symbols[combo[1]] === symbols[combo[2]]) {
        if (symbols[combo[0]] === 'X') {
          this.setState({ announcement: 'X won!' });
        } else {
          this.setState({ announcement: 'O won!' });
        }
        return true;
      }
      if (this.state.count === 9) {
        this.setState({ announcement: 'Tie' });
      }
      return false;
    });
  }

  resetBoard() {
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      winner: false,
      announcement: 'Who will win?',
      count: 0,
    });
  }

  render() {
    return (
      <div style={style.container}>
        <Header title={'Tic Tac Toe'} />
        <div>
          <Announcement title={this.state.announcement} />
        </div>
        <div style={style.board}>
          <div className={styles.board}>
            {this.state.gameBoard.map((cell, index) => {
              return (
                <div
                  key={index}
                  onClick={() => this.handleClick(index)}
                  className={styles.square}
                >{cell}</div>
              );
            })}
          </div>
        </div>
        <ResetButton reset={() => this.resetBoard()} />
      </div>
    );
  }
}
