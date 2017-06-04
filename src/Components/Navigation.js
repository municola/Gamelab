import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from '../Css/Navigation.css';

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      onlinechecker: { color: '#a5b6c3', textDecoration: 'none' },
      ultimatebravery: { color: '#a5b6c3', textDecoration: 'none' },
      notes: { color: '#a5b6c3', textDecoration: 'none' },
      rockpaperscissors: { color: '#a5b6c3', textDecoration: 'none' },
      tictactoe: { color: '#a5b6c3', textDecoration: 'none' },
      connectfour: { color: '#a5b6c3', textDecoration: 'none' },
    };
  }

  resetColors() {
    this.setState({ onlinechecker: { color: '#a5b6c3', textDecoration: 'none' } });
    this.setState({ ultimatebravery: { color: '#a5b6c3', textDecoration: 'none' } });
    this.setState({ notes: { color: '#a5b6c3', textDecoration: 'none' } });
    this.setState({ rockpaperscissors: { color: '#a5b6c3', textDecoration: 'none' } });
    this.setState({ tictactoe: { color: '#a5b6c3', textDecoration: 'none' } });
    this.setState({ connectfour: { color: '#a5b6c3', textDecoration: 'none' } });
  }

  handleColor(a) {
    this.resetColors();
    switch (a) {
      case 0: this.setState({ onlinechecker: { color: 'white', textDecoration: 'none' } }); break;
      case 1: this.setState({ ultimatebravery: { color: 'white', textDecoration: 'none' } }); break;
      case 2: this.setState({ notes: { color: 'white', textDecoration: 'none' } }); break;
      case 3: this.setState({ rockpaperscissors: { color: 'white', textDecoration: 'none' } });
        break;
      case 4: this.setState({ tictactoe: { color: 'white', textDecoration: 'none' } }); break;
      case 5: this.setState({ connectfour: { color: 'white', textDecoration: 'none' } }); break;
      default: this.setState({ onlinechecker: { colro: 'red' } });
    }
  }

  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.nimulia}>
          <p className={styles.nimuliaText}>Nimulia</p>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(0)} style={this.state.onlinechecker} to="onlinechecker"
          >Online Checker</Link>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(1)}
            style={this.state.ultimatebravery} to="ultimatebravery"
          >Ultimate Bravery</Link>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(2)} style={this.state.notes} to="notes"
          >Notes</Link>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(3)}
            style={this.state.rockpaperscissors} to="rockpaperscissors"
          >Rock Paper Scissors</Link>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(4)} style={this.state.tictactoe} to="tictactoe"
          >Tic Tac Toe</Link>
        </div>
        <div className={styles.children}>
          <Link
            onClick={() => this.handleColor(5)} style={this.state.connectfour} to="connectfour"
          >Connect Four</Link>
        </div>
      </div>
    );
  }
}
