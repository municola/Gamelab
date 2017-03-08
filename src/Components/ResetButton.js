import React from 'react';

const style = {
  title: {
    color: 'white',
    padding: '5px',
    marginTop: '0px',
  },
  button: {
    color: 'white',
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '30px',
    width: '200px',
    height: '70px',
    padding: '14px',
    border: '1px solid white',
    backgroundColor: '#0D658C',
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
