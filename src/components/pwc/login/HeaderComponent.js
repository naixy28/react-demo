'use strict';

import React from 'react';

require('styles/pwc/login/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="logo"></div>
        <div className="project-name">CRONOS</div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'PwcLoginHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
