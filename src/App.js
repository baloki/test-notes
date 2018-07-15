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
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    this.setState(function(prevState, props) {
      localStorage.setItem('notes', [...prevState.notes, form.get('note')]);
      return {
        notes: [...prevState.notes, form.get('note')]
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
                <Note text={note} key={`note-${iterator}`} />
              )
            )
          }
        </div>
      </main>
    );
  }
}

export default App;
