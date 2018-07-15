import React, { Component } from 'react';

import Note from './note';
import './input.css';

class App extends Component {
  constructor(Props) {
    super(Props);

    this.state = {
      notes: localStorage.getItem('notes').split(',')
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  removeNote(noteValue) {
    this.setState(function(prevState, props) {
      const index = prevState.notes.indexOf(noteValue);
      const newState = [...prevState.notes]
      if (index !== -1) newState.splice(index, 1);
      localStorage.setItem('notes', newState);

      return {
        notes: newState
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    this.setState(function(prevState, props) {
      const newState = [...prevState.notes, form.get('note')];
      localStorage.setItem('notes', newState);

      return {
        notes: newState
      };
    });
  }

  render() {
    return (
      <main>
        <form className="input" onSubmit={this.handleSubmit}>
          <textarea className="input__field" name="note">

          </textarea>
          <input type="submit" value="Make Note" className="input__button" />
        </form>
        <div className="notes">
          {
            this.state.notes.map(
              (note, iterator) => (
                <Note
                  text={note}
                  key={`note-${iterator}`}
                  removeNote={this.removeNote}
                />
              )
            )
          }
        </div>
      </main>
    );
  }
}

export default App;
