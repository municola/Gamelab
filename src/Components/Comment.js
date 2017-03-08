import React from 'react';

const style = {
  p: {
    fontSize: '25px',
    width: '260px',
    color: 'white',
    alignSelf: 'center',
    marginRight: '300px',
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
