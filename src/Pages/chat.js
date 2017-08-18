import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

import { newChat, setUsername, loginTrue } from '../Actions/chat.js';
import Header from '../Components/Header';

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
  chatArea: {
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
};

const socket = io('http://localhost:5609');

class chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    socket.on('chatlog', (chatlog) => {
      this.props.newChat(chatlog);
    });
    console.log('adsf');
  }

  change(event) {
    if (event.target.value !== '') {
      this.setState({ input: event.target.value });
    }
  }

  send() {
    socket.emit('send', this.state.input, this.props.chat.username);
    this.setState({ input: '' });
  }

  login() {
    socket.emit('login', this.props.chat.username);
    this.props.loginTrue();
  }

  render() {
    if (this.props.chat.login === true) {
      return (
        <div style={style.container}>
          <Header title={'Chat'} />
          <div style={style.innerContainer}>
            <ul style={style.chatArea}>
              {this.props.chat.chatlog.map((item, i) => {
                console.log(item);
                return (
                  <li style={style.message} key={i}>{item[1]}: {item[0]}</li>
                );
              })}
            </ul>
            <form style={style.form} onSubmit={() => this.send()}>
              <input
                style={style.input}
                value={this.state.input}
                onChange={(event) => this.change(event)}
              />
              <button style={style.submitButton} type="submit">send</button>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div style={style.container}>
        <Header title={'Chat'} />
        <div style={style.innerContainer}>
          <form style={style.form} onSubmit={() => this.login()}>
            <p style={style.fontOne}>Username: </p>
            <input
              style={style.input}
              onChange={(event) => this.props.setUsername(event.target.value)}
            />
          </form>
        </div>
      </div>
    );
  }
}

chat.propTypes = {
  chat: React.PropTypes.object,
  setUsername: React.PropTypes.func,
  loginTrue: React.PropTypes.func,
  newChat: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ newChat, setUsername, loginTrue }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(chat);
