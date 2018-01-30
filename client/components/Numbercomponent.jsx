import React, { Component } from 'react';

import './Numbercomponent.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';


class Numbercomponent extends React.Component {
constructor(props){
  super(props);
  this.setClassName = this.setClassName.bind(this);
}
  setClassName(number) {
    if(this.props.selectedNumbers.indexOf(number) >= 0){
      return 'selected';
    }
  };

  render() {
   let start = 1;
   let end = 9;
   var numberList = [];
   while(start <= end){
     numberList.push(start++);
   } ;
    return (
      <div className="NumberList">
        {
        numberList.map((number,i) => <button key={i} className={this.setClassName(number)} onClick = {() => this.props.handleSelectedNumbers(number)}>{number}</button>)
        }
        </div>
    )
  }
}
export default Numbercomponent;