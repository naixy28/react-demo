'use strict';

import React from 'react';

require('styles/pwc/login/LoginForm.scss');

class LoginFormComponent extends React.Component {
  render() {
    return (
      <div className="loginform-component">
        <form>
          login Part
          </form>

      </div>
    );
  }
}

LoginFormComponent.displayName = 'PwcLoginLoginFormComponent';

// Uncomment properties you need
// LoginFormComponent.propTypes = {};
// LoginFormComponent.defaultProps = {};

export default LoginFormComponent;
