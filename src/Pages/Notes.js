import React, { Component } from 'react';
import Comment from '../Components/Comment';
import EditButton from '../Components/EditButton';
import SaveButton from '../Components/SaveButton';
import Header from '../Components/Header';

const { List } = require('immutable');

const style = {
  parent: {
    height: '160px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#52CAFF',
    justifyContent: 'center',
  },
  textarea: {
    fontSize: '25px',
    width: '260px',
    alignSelf: 'center',
    marginRight: '300px',
  },
};

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      immutableCommentBox: List.of(' ', ' ', ' '),
      immutableComments: List.of('Comment', 'Comment', 'Comment'),
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
        style={style.textarea}
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
      <div>
        <Header title={'Notes'} />
        {this.state.immutableCommentBox.map((item, index) => {
          return (
            <div style={style.parent} key={index}>
              {this.printComment(index)}
              {this.printButton(index)}
            </div>
          );
        })}
      </div>
    );
  }
}
