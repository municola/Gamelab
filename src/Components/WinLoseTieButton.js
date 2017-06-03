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
