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


const Layout = ({title}) =>
  <div className={styles.container}>
    <AppBar
      title={title}
      showMenuIconButton={false}
    />
    <ContactsContainer/>
  </div>

class ContactsContainer extends React.Component{

  constructor(){
    super()
    this.state ={
      contacts: []
    }
  }

  componentWillMount(){
    this.setState({
      contacts:[
        {
          "id": "57ee79e2cc08a67d804678ef",
          "name": "Jonh Doe",
          "phone": "+1 (891) 447-3238"
        }
      ]
    })
  }

  render(){
    return(
      <div className={styles.list}>
        <ContactsList contacts={this.state.contacts}/>
        <SeeMoreBar/>
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



const SeeMoreBar = () => <div className={styles.seemore}>See More </div>


Layout.propTypes = { className: PropTypes.string };

export default Layout;
