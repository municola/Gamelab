import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { autobind } from 'core-decorators';
import { LocalForm } from 'react-redux-form';

import Header from '../Components/Header';
import ChatRoom from '../Containers/chatRoom';
import {
  newMessage,
  setUsername,
  joinTrue,
  newUser,
  room,
  update } from '../Actions/chat.js';

const style = {
  fontOne: {
    color: '#3ab2b2',
    marginRight: '20px',
  },
  container: {
    width: '80%',
    backgroundColor: '#151d25',
  },
  innerContainer: {
    padding: '100px',
  },
  title: {
    marginTop: '0px',
    color: 'white',
  },
  users: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    padding: '0px',
  },
  chat: {
    padding: '20px',
    height: '400px',
    backgroundColor: '#364554',
    marginBottom: '20px',
    listStyleType: 'none',
    overflow: 'auto',
  },
  message: {
    color: '#3ab2b2',
  },
  message2: {
    color: '#3ab2b2',
  },
  message3: {
    color: '#bdbdbd',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    flexGrow: '1',
    marginRight: '50px',
    color: '#3ab2b2',
    fontSize: '25px',
    padding: '10px',
    border: 'none',
    alignSelf: 'center',
    backgroundColor: '#364554',
  },
  submitButton: {
    height: '50px',
    alignSelf: 'center',
    width: '150px',
    padding: '10px',
    backgroundColor: '#3ab2b2',
    color: 'white',
    fontSize: '25px',
    border: 'none',
  },
  chatRooms: {
    display: 'flex',
    flexDirection: 'row',
  },
  roomButton: {
    fontSize: '20px',
    margin: '20px',
    marginLeft: '0px',
    border: 'none',
    padding: '15px',
    alignSelf: 'center',
    backgroundColor: '#364554',
    color: 'white',
  },
};

const socket = io('http://localhost:5609');

class chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  @autobind
  componentDidMount() {
    socket.on('newMessage', (username, message) => {
      this.props.newMessage(username, message);
    });
    socket.on('newUser', (user) => {
      this.props.newUser(user);
    });
    socket.on('update', (msg) => {
      this.props.update(msg);
    });
  }

  @autobind
  change(event) {
    if (event.target.value !== '') {
      this.setState({ input: event.target.value });
    }
  }

  @autobind
  send() {
    socket.emit('send', this.state.input, this.props.chat.username);
    this.setState({ input: '' });
  }

  @autobind
  join() {
    socket.emit('join', this.props.chat.username);
    this.props.joinTrue();
  }

  @autobind
  connect(i) {
    socket.emit('subscribe', i);
    this.props.room(i);
  }

  render() {
    if (this.props.chat.join === true) {
      if (this.props.chat.room !== '') {
        return <ChatRoom socket={socket} />;
      }
      return (
        <div style={style.container}>
          <Header title={'Chat'} />
          <div style={style.innerContainer}>
            <div style={style.userArea}>
              <p style={style.title}>Online Users</p>
              <ul style={style.users}>
                {this.props.chat.users.map((item, i) => {
                  if (i === this.props.chat.users.length - 1) {
                    return <li style={style.message2} key={i}>{`${item[1]}`}</li>;
                  } return <li style={style.message} key={i}>{`${item[1]}\u00A0`}</li>;
                })}
              </ul>
            </div>
            <div style={style.chatArea}>
              <ul style={style.chat}>
                {this.props.chat.chatlog.map((item, i) => {
                  if (item.length === 1) {
                    return <li style={style.message3} key={i}>{item}</li>;
                  } return <li style={style.message} key={i}>{item[0]}: {item[1]}</li>;
                })}
              </ul>
              <LocalForm style={style.form} onSubmit={() => this.send()}>
                <input
                  style={style.input}
                  value={this.state.input}
                  onChange={(event) => this.change(event)}
                />
                <button style={style.submitButton} type="submit">send</button>
              </LocalForm>
            </div>
            <div style={style.chatRooms}>
              <button style={style.roomButton} onClick={() => this.connect(1)}>Room 1</button>
              <button style={style.roomButton} onClick={() => this.connect(2)}>Room 2</button>
              <button style={style.roomButton} onClick={() => this.connect(3)}>Room 3</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={style.container}>
        <Header title={'Chat'} />
        <div style={style.innerContainer}>
          <LocalForm style={style.form} onSubmit={() => this.join()}>
            <p style={style.fontOne}>Username: </p>
            <input
              style={style.input}
              onChange={(event) => this.props.setUsername(event.target.value)}
            />
          </LocalForm>
        </div>
      </div>
    );
  }
}

chat.propTypes = {
  chat: React.PropTypes.object,
  setUsername: React.PropTypes.func,
  joinTrue: React.PropTypes.func,
  newMessage: React.PropTypes.func,
  newUser: React.PropTypes.func,
  update: React.PropTypes.func,
  room: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ newMessage, setUsername, joinTrue, newUser, update, room }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(chat);
