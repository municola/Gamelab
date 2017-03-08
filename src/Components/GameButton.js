import React from 'react';

const style = {
  buttonStyle: {
    fontSize: '23px',
    width: '200px',
    padding: '50px',
    backgroundColor: '#15ADFF',
    color: 'white',
    border: '2px solid white',
  },
};

export default function GameButton(props) {
  return (
    <div>
      <button style={style.buttonStyle} type="button" onClick={props.change}>
        {props.title}</button>
    </div>
  );
}

GameButton.propTypes = {
  title: React.PropTypes.string.isRequired,
  change: React.PropTypes.func.isRequired,
};
