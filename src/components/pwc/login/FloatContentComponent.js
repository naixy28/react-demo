'use strict';

import React from 'react';

require('styles/pwc/login/FloatContent.scss');

class FloatContentComponent extends React.Component {
  render() {
    return (
      <div className="floatcontent-component">
        <h2>Welcome to CRONOS</h2>
        <p>A flexible case management solution that </p>
        <p>increases collaboration and consolidates data access</p>
      </div>
    );
  }
}

FloatContentComponent.displayName = 'PwcLoginFloatContentComponent';

// Uncomment properties you need
// FloatContentComponent.propTypes = {};
// FloatContentComponent.defaultProps = {};

export default FloatContentComponent;
