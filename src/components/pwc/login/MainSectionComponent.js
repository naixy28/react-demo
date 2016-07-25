'use strict';

import React from 'react';

require('styles/pwc/login/MainSection.scss');

import FloatContent from './FloatContentComponent';
import LoginForm from './LoginFormComponent';


class MainSectionComponent extends React.Component {
  render() {
    return (
      <div className="mainsection-component">
        <FloatContent></FloatContent>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

MainSectionComponent.displayName = 'PwcLoginMainSectionComponent';

// Uncomment properties you need
// MainSectionComponent.propTypes = {};
// MainSectionComponent.defaultProps = {};

export default MainSectionComponent;
