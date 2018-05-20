import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './congrats';
import Input from './input';
import NewWordButton, { UnconnectedNewWordButton} from './newWordButton';
import { getSecretWord } from './actions';


export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  };

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <NewWordButton success={this.props.success}/>
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);

// jotto challenges.

// 2) add a new word button. displays after successful guess.
// reset the game with a new word from the server.

// 3) create a 'give up' button.
// display when the word has not displayed correctly.

// 4) add a feature where the user can input the secret word.

// 5) the user can't guess the word twice.

// 6) display an error if there's a problem contacting the "random word" server.
