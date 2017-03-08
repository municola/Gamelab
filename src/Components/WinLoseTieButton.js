import React from 'react';

const style = {
  buttonStyle: {
    fontSize: '23px',
    width: '250px',
    padding: '35px',
    backgroundColor: '#52CAFF',
    color: 'white',
    border: '2px solid white',
  },
};

export default function WinLoseTieButton(props) {
  return (
    <div className="buttonClass">
      <button style={style.buttonStyle} type="button">{props.title}</button>
    </div>
  );
}

WinLoseTieButton.propTypes = {
  title: React.PropTypes.string.isRequired,
};
