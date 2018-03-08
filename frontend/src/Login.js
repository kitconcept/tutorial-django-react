import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

/**
 * Login container class.
 * @class Login
 * @extends Component
 */
class Login extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        url: PropTypes.string
      })
    ).isRequired
  };

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}

export default Login;
