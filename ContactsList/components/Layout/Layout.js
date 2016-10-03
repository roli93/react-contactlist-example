/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import tile from '../../public/tile.png'
import ShowMoreIcon from 'material-ui/svg-icons/notification/more';
import styles from './Layout.css'
import ContactsService from '../../core/contactsService.js'


const Layout = ({title}) =>
  <div className={styles.container}>
    <AppBar
      title={title}
      showMenuIconButton={false}
    />
    <ContactsContainer pageSize={20}/>
  </div>

class ContactsContainer extends React.Component{

  constructor(){
    super()
    this.state ={
      contacts: [],
      currentPage: 0
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

  render(){
    return(
      <div className={styles.list}>
        <ContactsList contacts={this.state.contacts}/>
        <SeeMoreBar onClickHandler={this.getMoreContactPreviews.bind(this)}/>
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



const SeeMoreBar = ({onClickHandler}) =>
  <div className={styles.seemore} onClick={onClickHandler}>
    See More
  </div>


Layout.propTypes = { className: PropTypes.string };

export default Layout;
