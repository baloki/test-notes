import React, { Component } from 'react';

import './input.css';

class Input extends Component {
  render() {
    return (
      <form className="input" onSubmit={this.props.handleSubmit}>
        <textarea className="input__field" name="note" />
        <input type="submit" value="Make Note" className="input__button" />
      </form>
    );
  }
}

export default Input;
