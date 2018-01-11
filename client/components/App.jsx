
import React, {PropTypes} from 'react';
import './App.css';
import './Star.jsx'
import Star from './Star.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
        Card component ...
       <Star/>
     </div>);
  }
};
