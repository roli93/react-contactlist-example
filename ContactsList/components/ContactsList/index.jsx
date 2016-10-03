import React, { PropTypes } from 'react';
import styles from './styles.css'

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
      <List>
        {this.getContactsListItems()}
      </List>
    )
  }

}


export default ContactsList;
