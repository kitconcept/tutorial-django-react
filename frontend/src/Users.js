import { Component, React} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { getBaseUrl } from "./helpers/Url/Url";
import getUsers from "./reducers/users/users";

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
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    this.props.getUsers(getBaseUrl(this.props.pathname));
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.getUsers(getBaseUrl(nextProps.pathname));
    }
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { items: state.users.items }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
