import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions';

/**
 * Users container class.
 * @class Users
 * @extends Component
 */
class Users extends Component {
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
    this.props.getUsers();
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {
    // this.props.getUsers();
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    return (
      <div>
        <h1>Users</h1>
        <p>List of users</p>
        <ul>
          {this.props.items.map(function(listValue) {
            return (
              <li>
                {listValue.title} ({listValue.email})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ items: state.users.items }),
  dispatch => bindActionCreators({ getUsers }, dispatch)
)(Users);
