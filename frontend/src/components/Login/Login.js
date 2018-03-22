import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { login } from '../../actions';

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
    login: PropTypes.func.isRequired,
    error: PropTypes.shape({
      message: PropTypes.string
    }),
    loading: PropTypes.bool,
    token: PropTypes.string,
    returnUrl: PropTypes.string
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    error: null,
    loading: null,
    token: null,
    returnUrl: null
  };

  /**
   * Context types.
   * @property {Object} contextTypes Context types.
   * @static
   */
  static contextTypes = {
    router: PropTypes.object
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.context.router.history.push('/');
    }
  }

  /**
   * On login handler
   * @method onLogin
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onLogin(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  /**
   * On change username
   * @method onChangeUsername
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  /**
   * On change password
   * @method onChangePassword
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onChangePassword(event) {
    this.setState({ password: event.target.value });
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
        <form method="post" onSubmit={this.onLogin}>
          {this.props.error &&
            map(this.props.error, error => (
              <div key={error} className="error">
                {error}
              </div>
            ))}
          <div>
            <label>
              Username
              <input
                type="text"
                name="login"
                tabIndex={1}
                onChange={this.onChangeUsername}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                tabIndex={2}
                onChange={this.onChangePassword}
              />
            </label>
          </div>
          <div>
            <button id="login-form-submit" type="submit" title="Login">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    error: state.userSession.login.error,
    loading: state.userSession.login.loading,
    token: state.userSession.token,
    returnUrl: '/'
  }),
  dispatch => bindActionCreators({ login }, dispatch)
)(Login);
