/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import config from '../../config.js';

class App extends React.Component {

  componentDidMount() {
    document.title = config.appTitle;
  }

  render() {
    return (
      <Layout/>
    );
  }

}

export default App;
