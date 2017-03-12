import React from 'react';
import { Link } from 'react-router';

import styles from '../Css/Navigation.css';

export default function Navigation() {
  return (
    <div className={styles.parent}>
      <div className={styles.nimulia}>
        <p className={styles.nimuliaText}>Nimulia</p>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="onlinechecker">Online Checker</Link>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="ultimatebravery">Ultimate Bravery</Link>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="notes">Notes</Link>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="rockpaperscissors">Rock Paper Scissors</Link>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="tictactoe">Tic Tac Toe</Link>
      </div>
      <div className={styles.children}>
        <Link className={styles.link} to="connectfour">Connect Four</Link>
      </div>
    </div>
  );
}
