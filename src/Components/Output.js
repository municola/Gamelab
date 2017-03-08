import React from 'react';

const style = {
  buttonStyle: {
    width: '300px',
  },
};

export default function Output(props) {
  return (
    <div style={style.buttonStyle} className="OutputClass">
      <p>{props.title}</p>
    </div>
  );
}

Output.propTypes = {
  title: React.PropTypes.string.isRequired,
};
