import React from 'react';

const style = {
  title: {
    color: 'white',
    paddingTop: '40px',
    paddingBottom: '40px',
    fontSize: '30px',
    backgroundColor: '#15ADFF',
  },
};

export default function Announcement(props) {
  return (
    <div style={style.title}>
      {props.title}
    </div>
  );
}

Announcement.propTypes = {
  title: React.PropTypes.string.isRequired,
};
