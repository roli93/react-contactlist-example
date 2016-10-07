import React, { PropTypes } from 'react';
import styles from './styles.css'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ShowMoreIcon from 'material-ui/svg-icons/notification/more';

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

export default ContactsList;
