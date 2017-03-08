import React from 'react';

const style = {
  Button: {
    height: '70px',
    alignSelf: 'center',
    width: '150px',
    padding: '14px',
    backgroundColor: '#15ADFF',
    color: 'white',
    fontSize: '25px',
    border: '2px solid white',
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

