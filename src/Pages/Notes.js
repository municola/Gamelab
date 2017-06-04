import React, { Component } from 'react';
import Comment from '../Components/Comment';
import EditButton from '../Components/EditButton';
import SaveButton from '../Components/SaveButton';
import Header from '../Components/Header';

const { List } = require('immutable');

const style = {
  content: {
    width: '80%',
    backgroundColor: '#151d25',
  },
  innerContainer: {
    padding: '100px',
  },
  parent: {
    height: '140px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    color: '#3ab2b2',
    fontSize: '25px',
    width: '450px',
    padding: '10px',
    border: 'none',
    alignSelf: 'center',
    marginRight: '300px',
    backgroundColor: '#364554',
  },
};

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      immutableCommentBox: List.of(' ', ' ', ' ', ' ', ' '),
      immutableComments: List.of('Comment', 'Comment', 'Comment', 'Comment', 'Comment'),
    };
  }

  edit(index) {
    this.setState({ immutableCommentBox: this.state.immutableCommentBox.set(index, '1') });
    this.setState({ edit: true });
  }

  save(index) {
    this.setState({ immutableCommentBox: this.state.immutableCommentBox.set(index, ' ') });
    this.setState({ edit: false });
  }

  handleChange(event, index) {
    this.setState({ immutableComments:
      this.state.immutableComments.set(index, event.target.value) });
  }

  printComment(index) {
    if (this.state.immutableCommentBox.get(index) === ' ') {
      return <Comment print={this.state.immutableComments} index={index} />;
    }
    return (
      <input
        value={this.state.immutableComments.get(index)}
        onChange={(event) => this.handleChange(event, index)}
        style={style.input}
      />
    );
  }

  printButton(index) {
    if (this.state.immutableCommentBox.get(index) === ' ') {
      return <EditButton edit={() => this.edit(index)} />;
    }
    return <SaveButton save={() => this.save(index)} />;
  }

  render() {
    return (
      <div style={style.content}>
        <Header title={'Notes'} />
        <div style={style.innerContainer}>
          {this.state.immutableCommentBox.map((item, index) => {
            return (
              <div style={style.parent} key={index}>
                {this.printComment(index)}
                {this.printButton(index)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
