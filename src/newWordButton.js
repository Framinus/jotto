import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetGame, getSecretWord } from './actions';

export class UnconnectedNewWordButton extends Component {
  constructor(props) {
    super(props);

    this.gameReboot = this.gameReboot.bind(this);
  }

  gameReboot() {
    this.props.resetGame();
    this.props.getSecretWord();
  }

  render() {
    if (this.props.success) {
      return (
        <button
          data-test="component-new-word-button"
          className="btn btn-success"
          onClick={this.gameReboot}
          >
            New Word!
          </button>
        );
      } else {
        return null;
      }
  }
};

UnconnectedNewWordButton.propTypes = {
  success: PropTypes.bool.isRequired,
}

function mapStateToProps({ success }) {
  return { success };
};

export default connect(mapStateToProps, { resetGame, getSecretWord })(UnconnectedNewWordButton);
