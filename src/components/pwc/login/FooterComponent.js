'use strict';

import React from 'react';

require('styles/pwc/login/Footer.scss');

class FooterComponent extends React.Component {
  test(){
    alert('asd');
  }
  render() {
    return (
      <footer className="footer-component" onClick={this.test}>
        <div className="footer-content">
          © 2016 PricewaterhouseCoopers LLP. </div>
      </footer>
    );
  }

}

FooterComponent.displayName = 'PwcLoginFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
