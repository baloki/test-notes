import React, { Component } from 'react';

import './note.css';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <div className="note__text">
          {this.props.text}
        </div>
        <button className="note__remove" onClick={() => this.props.removeNote(this.props.text)}>
          Remove Note
        </button>
      </div>
    );
  }
}

export default Note;
