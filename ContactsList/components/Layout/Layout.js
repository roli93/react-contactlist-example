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
    <ContactsList/>
  </div>

const ContactsList = () =>
  <div className={styles.list}>
    <List>
      <ListItem
        primaryText="Brendan Lim"
        secondaryText='1560078965'
        leftAvatar={<Avatar src={tile} />}
        rightIcon={<ShowMoreIcon/>}
      />
    </List>
    <SeeMoreBar/>
  </div>

const SeeMoreBar = () => <div className={styles.seemore}>See More </div>


Layout.propTypes = { className: PropTypes.string };

export default Layout;
