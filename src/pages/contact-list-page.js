import React, { Component} from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/contact-list';
import { fetchContacts } from '../actions/contact-actions';

class ContactListPage extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contacts}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactListPage);
