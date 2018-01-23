import React, { Component } from 'react';

import './Star.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Star extends React.Component {
  render() {
    let numberOfStars = [];

    return (
      <div className="Star">
        <i class="fa fa-star"></i> 
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
     </div>
    );
 }
}

export default Star;

















