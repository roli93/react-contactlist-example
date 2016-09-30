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

function Layout(props) {
  return (
    <div>
    <AppBar
    title={props.title}
    showMenuIconButton={false}
  />
    </div>
  );
}

Layout.propTypes = { className: PropTypes.string };

export default Layout;
