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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

  title(){
    return config.appTitle;
  }

  componentDidMount() {
    document.title = this.title();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout title={this.title()}/>
      </MuiThemeProvider>
    );
  }

}

export default App;
