import React, { PropTypes } from 'react';
import styles from './styles.css'
import ContactsService from '../../core/contactsService.js'
import SeeMoreBar from '../SeeMoreBar/index.jsx'
import ContactView from '../ContactView/index.jsx'
import TextField from 'material-ui/TextField'
import ContactsList from '../ContactsList/index.jsx'

class ContactsContainer extends React.Component{

  constructor(){
    super()
    this.state ={
      contacts: [],
      currentPage: 0,
      currentContact: {},
      filterText: "",
      contactViewOpen: false
    }
  }

  componentWillMount(){
    this.getMoreContactPreviews();
  }

  getMoreContactPreviews(){
    const {pageSize} = this.props
    this.setState({
      contacts: [
        ...this.state.contacts,
        ...ContactsService.getContactPreviews(this.state.currentPage * pageSize, pageSize)
      ],
      currentPage: this.state.currentPage + 1
    })
  }

  openContact(contactId){
    this.setState({
      currentContact: ContactsService.getContact(contactId),
      contactViewOpen: true
    })
  }

  closeContact(){
    this.setState({
      contactViewOpen: false
    })
  }

  filterTextChangeHandler(event){
    let value = event.target.value
    this.setState({filterText:value})
  }

  getFilteredContacts(){
     return this.state.contacts.filter(
       c => c.name.toLowerCase().includes(this.state.filterText.toLowerCase())
     );
  }

  render(){
    return(
      <div className={styles.flexContainer}>
        <TextField
          hintText="Type a name"
          onChange={this.filterTextChangeHandler.bind(this)}
        />
        <ContactsList
          contacts={this.getFilteredContacts()}
          onContactClickHandler={this.openContact.bind(this)}
        />
        <SeeMoreBar onClickHandler={this.getMoreContactPreviews.bind(this)}/>
        <ContactView
          ref="contactView"
          onContactViewClose={this.closeContact.bind(this)}
          open={this.state.contactViewOpen}
          contact={this.state.currentContact}
        />
      </div>
    )
  }

}

export default ContactsContainer;
