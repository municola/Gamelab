import React from 'react';

const style = {
  title: {
    color: '#3ab2b2',
    paddingTop: '40px',
    paddingBottom: '40px',
    fontSize: '30px',
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
