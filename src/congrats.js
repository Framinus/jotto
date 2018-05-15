import React from 'react';
import PropTypes from 'prop-types';

/**
* @function Congrats
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
*/

export default function Congrats (props) {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message" className="alert alert-success">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
