import React from 'react';

const style = {
  title: {
    color: 'white',
    padding: '5px',
    marginTop: '0px',
  },
  button: {
    width: '200px',
    height: '70px',
    padding: '14px',
    backgroundColor: '#3ab2b2',
    color: 'white',
    fontSize: '25px',
    border: 'none',
    marginTop: '30px',
  },
};

export default function ResetButton(props) {
  return (
    <div style={style.title}>
      <button style={style.button} onClick={props.reset}>Reset Button</button>
    </div>
  );
}

ResetButton.propTypes = {
  reset: React.PropTypes.func.isRequired,
};
