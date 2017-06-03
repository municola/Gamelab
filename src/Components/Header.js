import React from 'react';

const style = {
  header: {
    display: 'flex',
    backgroundColor: '#364554',
    justifyContent: 'center',
    height: '8vh',
  },
  title: {
    alignSelf: 'center',
    fontSize: '30px',
    color: 'white',
  },
};

export default function Header(props) {
  return (
    <div style={style.header}>
      <p style={style.title}>{props.title}</p>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

