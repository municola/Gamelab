import React from 'react';
import { Link } from 'react-router';

const style = {
  parent: {
    height: '120px',
    backgroundColor: '#0D658C',
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  children: {
    alignSelf: 'center',
    color: 'white',
    fontSize: '25px',
  },
};

export default function Navigation() {
  return (
    <div style={style.parent}>
      <div style={style.children}>
        <Link style={style.link} to="onlinechecker">Online Checker</Link>
      </div>
      <div style={style.children}>
        <Link style={style.link} to="ultimatebravery">Ultimate Bravery</Link>
      </div>
      <div style={style.children}>
        <Link style={style.link} to="notes">Notes</Link>
      </div>
      <div style={style.children}>
        <Link style={style.link} to="rockpaperscissors">Rock Paper Scissors</Link>
      </div>
      <div style={style.children}>
        <Link style={style.link} to="tictactoe">Tic Tac Toe</Link>
      </div>
      <div style={style.children}>
        <Link style={style.link} to="connectfour">Connect Four</Link>
      </div>
    </div>
  );
}
