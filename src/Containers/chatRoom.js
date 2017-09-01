import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import { leaveRoom } from '../Actions/chat.js';
import Header from '../Components/Header';

const style = {
  container: {
    width: '80%',
    backgroundColor: '#151d25',
  },
  innerContainer: {
    padding: '100px',
  },
  title: {
    margin: '0px',
    color: 'white',
    marginBottom: '10px',
  },
};

class chatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      msg: '',
    };
  }

  @autobind
  componentDidMount() {
    this.props.socket.on('name', (name) => {
      this.setState({ name });
    });
    this.props.socket.on('msg', (msg) => {
      this.setState({ msg });
      console.log('received', msg);
    });
  }

  @autobind
  connect() {
    this.props.socket.emit('test', this.props.chat.room, 'plllouse');
  }

  @autobind()
  leave() {
    this.props.socket.emit('unsubscribe', this.props.chat.room);
    this.props.leaveRoom();
    console.log('s');
  }

  render() {
    return (
      <div style={style.container}>
        <Header title={'Chat'} />
        <div style={style.innerContainer}>
          <p style={style.title}>Room {this.state.name}</p>
          <button onClick={this.connect}>click me</button>
          {this.state.msg}
        </div>
        <button onClick={() => this.leave()}>leave</button>
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
  return bindActionCreators({ leaveRoom }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(chatRoom);
