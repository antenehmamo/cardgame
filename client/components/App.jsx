
import React, {PropTypes} from 'react';
import './App.css';
import './Star.jsx';
import './Answer.jsx';
import './Numbercomponent';
import Star from './Star.jsx';
import Answer from './Answer.jsx';
import Numbercomponent from './Numbercomponent';



export default class App extends React.Component {
  render() {
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
       <Star/>
       <Answer/>
       <Numbercomponent/>
     </div>
     );
  }
};
