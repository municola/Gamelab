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

export default function EditButton(props) {
  return (
    <button style={style.Button} onClick={props.edit}>Edit</button>
  );
}

EditButton.propTypes = {
  edit: React.PropTypes.func.isRequired,
};
