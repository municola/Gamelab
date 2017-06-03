import React from 'react';

const style = {
  buttonStyle: {
    fontSize: '23px',
    width: '250px',
    padding: '40px',
    backgroundColor: '#3ab2b2',
    color: 'white',
    border: 'none',
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
