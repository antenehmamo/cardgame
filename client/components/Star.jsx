import React, { Component } from 'react';

import './Star.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Star extends React.Component {
  render() {
    let stars = [];
    const randGen = this.props.numberOfStars;
    for(let i=0; i < randGen; i ++){
      numberOfStars.push(<i key={i} class="fa fa-star"></i>);
    }

    return (
      <div className="Star">
       {stars}
       {this.props.numberOfStars}
     </div>
    );
 }
}

export default Star;

















