import React, { Component } from 'react';

import './Numbercomponent.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';


class Numbercomponent extends React.Component {
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
        numberList.map((number,i) => <button key={i} onClick = {() => this.props.handleSelectedNumbers(number)}>{number}</button>)
        }
        </div>
    )
  }
}
export default Numbercomponent;