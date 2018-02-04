import React, { Component } from 'react';

import './Star.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Star extends React.Component {
  render() {
    const { numberOfStars } = this.props;
    let stars = [];
    for(let i=0; i < numberOfStars; i ++){
      stars.push(<i key={i} class="fa fa-star"></i>);
    }

    return (
      <div className="Star">
       {stars}
          <span className="numOfStar"> {numberOfStars}</span>
     </div>
    );
 }
}

export default Star;

















