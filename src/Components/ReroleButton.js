import React from 'react';

const style = {
  buttonStyle: {
    width: '200px',
    height: '70px',
    padding: '14px',
    backgroundColor: '#3ab2b2',
    color: 'white',
    fontSize: '25px',
    border: 'none',
  },
};

export default function ReroleButton(props) {
  return (
    <div className="buttonClass">
      <button style={style.buttonStyle} type="button" onClick={props.change}>
        {props.title}</button>
    </div>
  );
}

ReroleButton.propTypes = {
  title: React.PropTypes.string.isRequired,
  change: React.PropTypes.func.isRequired,
};
