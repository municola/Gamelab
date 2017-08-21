import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import {  } from '../Actions/chat.js';
import Header from '../Components/Header';

const style = {
  fontOne: {
    color: '#3ab2b2',
    marginRight: '20px',
  },
};

class chatRoom extends Component {

  @autobind
  connect() {
    this.props.socket.emit('test', 'please');
  }

  render() {
    return (
      <div>
        <Header />
        <p>Room</p>
        <button onClick={this.connect}>click me</button>
      </div>
    );
  }
}

chatRoom.propTypes = {
  chat: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(chatRoom);
