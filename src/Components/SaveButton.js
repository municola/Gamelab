import React from 'react';

const style = {
  Button: {
    height: '50px',
    alignSelf: 'center',
    width: '150px',
    padding: '10px',
    backgroundColor: '#3ab2b2',
    color: 'white',
    fontSize: '25px',
    border: 'none',
  },
};

export default function SaveButton(props) {
  return (
    <button style={style.Button} onClick={props.save}>Save</button>
  );
}

SaveButton.propTypes = {
  save: React.PropTypes.func.isRequired,
};

