import React from 'react';

const style = {
  buttonStyle: {
    width: '150px',
    height: '70px',
    padding: '14px',
    backgroundColor: '#52CAFF',
    color: 'white',
    fontSize: '25px',
    border: '2px solid white',
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
