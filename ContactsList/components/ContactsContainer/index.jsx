import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import tile from '../../public/tile.png'
import ShowMoreIcon from 'material-ui/svg-icons/notification/more';
import styles from './styles.css'
import ContactsService from '../../core/contactsService.js'
import SeeMoreBar from '../SeeMoreBar/index.jsx'
import ContactView from '../ContactView/index.jsx'
import TextField from 'material-ui/TextField'

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

class ContactsList extends React.Component{

  getContactsListItems(){
    return this.props.contacts.map( c =>
      <ListItem
        key={c.id}
        primaryText={c.name}
        secondaryText={c.phone}
        leftAvatar={<Avatar src={c.avatar} />}
        rightIcon={<ShowMoreIcon/>}
        onClick={() => this.props.onContactClickHandler(c.id)}
      />
    )
  }

  render(){
    return(
      <List className={styles.contactsList}>
        {this.getContactsListItems()}
      </List>
    )
  }

}

export default ContactsContainer;
