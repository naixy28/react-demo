'use strict';

require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('styles//pwc.scss');
require('styles//Login.scss');


import React from 'react';

import LoginHeader from './pwc/login/HeaderComponent';

import LoginFooter from './pwc/login/FooterComponent';

import MainSection from './pwc/login/MainSectionComponent'

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="login-component">
        <LoginHeader></LoginHeader>
        <MainSection></MainSection>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
