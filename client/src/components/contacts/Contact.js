import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (_id, dispatch) => {
    await axios.delete(`http://localhost:5000/${_id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: _id });
  };

  render() {
    const { _id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className="card card-body mb-3"
              style={{
                backgroundImage:
                  'linear-gradient(to right bottom, #5e6e87, #6288a1, #67a4b6, #73bfc4, #8cdacc)'
              }}
            >
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fa fa-sort-down"
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, _id, dispatch)}
                />
                <Link to={`/edit/${_id}`}>
                  <i
                    className="fa fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'blue',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right bottom, #8cdacc, #73bfc4, #67a4b6, #6288a1, #5e6e87)'
                    }}
                  >
                    Email: {email}
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right bottom, #8cdacc, #73bfc4, #67a4b6, #6288a1, #5e6e87)'
                    }}
                  >
                    Phone: {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
