import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
// import { asyncConnect } from "redux-connect";
// import { bindActionCreators } from "redux";
// import { browserHistory, Link } from "react-router";
// import { isEmpty } from "lodash";

import { login } from "./actions";


/**
 * Login container class.
 * @class Login
 * @extends Component
 */
class LoginComponent extends Component {

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
    token: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
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
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {}

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * On login handler
   * @method onLogin
   * @param {Object} event Event object.
   * @returns {undefined}
   */
  onLogin(event) {
    event.preventDefault();
    console.log("onLogin");
    // this.props.login(
    //   document.getElementsByName("login")[0].value,
    //   document.getElementsByName("password")[0].value
    // );

  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    return <div>
      <h1>Login</h1>
      <form method="post" onSubmit={this.onLogin}>
        <input id="login" name="login" tabIndex={1} />
        <input type="password" id="password" name="password" tabIndex={2} />
        <button id="login-form-submit" type="submit" title="Login">
          Login
        </button>
      </form>
    </div>;
  }
}

export default connect(
  (state, props) => ({
    error: state.userSession.login.error,
    loading: state.userSession.login.loading,
    token: state.userSession.token,
    returnUrl: props.location.query.return_url || '/',
  }),
  dispatch => bindActionCreators({ login }, dispatch),
)(LoginComponent);

// export default asyncConnect([
//   {
//     key: 'userSession',
//     promise: ({ store: { dispatch, getState } }) => {
//       const { form } = getState();
//       if (!isEmpty(form)) {
//         return dispatch(login(form.login, form.password));
//       }
//       return Promise.resolve({});
//     },
//   },
// ])(LoginComponent);

