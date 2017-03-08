import React from 'react';

const style = {
  header: {
    margin: '0px',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#15ADFF',
    color: 'white',
    fontSize: '30px',
  },
};

export default function Header(props) {
  return (
    <div style={style.header}>
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
