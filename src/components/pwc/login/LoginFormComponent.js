'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';

require('styles/pwc/login/LoginForm.scss');

class LoginFormComponent extends React.Component {
  doLogin(){
    var inputEmail=findDOMNode(this.refs.inputEmail);
    var inputPassword=findDOMNode(this.refs.inputPassword);
    var checkboxRemember=findDOMNode(this.refs.checkboxRemember);
    alert("email:"+inputEmail.value+"| password:"+inputPassword.value+" |checkboxRemember:"+checkboxRemember.value);
  }
  render() {
    return (
      <div className="loginform-component">
        <form>
          <h2>Welcome, Please log in</h2>
          <input type="email" className="form-control" placeholder="Email address" ref="inputEmail"/>
          <input type="password" className="form-control" placeholder="Password" ref="inputPassword"/>
          <div className="remember-login">
            <label >
              <input type="checkbox" ref="checkboxRemember"/>
              <span>Remember me</span>
            </label>
          </div>
          <button type="button" className="btn btn-pwc-orange" onClick={()=>this.doLogin()}>Login</button>
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
