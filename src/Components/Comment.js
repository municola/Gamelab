import React from 'react';

const style = {
  p: {
    fontSize: '25px',
    width: '450px',
    padding: '10px',
    color: '#3ab2b2',
    alignSelf: 'center',
    marginRight: '300px',
    backgroundColor: '#364554',
  },
};

export default function Comment(props) {
  return (
    <p style={style.p}>{props.print.get(props.index)}</p>
  );
}

Comment.propTypes = {
  index: React.PropTypes.number.isRequired,
  print: React.PropTypes.object.isRequired,
};
