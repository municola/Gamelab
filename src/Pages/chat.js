import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from '../Components/Header';

const style = {
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

export default class ConnectFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: '',
    };
  }

  componentDidMount() {
    socket.on('chatlog', (chatlog) => {
      this.setState({ messages: chatlog });
    });
  }

  change(event) {
    this.setState({ input: event.target.value });
  }

  send() {
    socket.emit('send', this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div style={style.container}>
        <Header title={'Chat'} />
        <div style={style.innerContainer}>
          <ul style={style.chatArea}>
            {this.state.messages.map((item, i) => {
              return (
                <li style={style.message} key={i}>{item}</li>
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
}
