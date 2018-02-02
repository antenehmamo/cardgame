import React, { Component } from 'react';

import './Numbercomponent.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';


class DoneFrame extends React.Component {
constructor(props){
  super(props);
  this.setClassName = this.setClassName.bind(this);
}

  render() {
   
    const { doneStatus }  = this.props;
    return (
      <div className="doneFrame">
       <h2>{doneStatus}</h2>
      </div>
    )
  }
}
export default DoneFrame;