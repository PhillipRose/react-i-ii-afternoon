import React from 'react';
import Data from './Components/Data'
import Display from './Components/Display'
import './App.css';




class App extends React.Component{
  constructor(){
    super()
  }



  render(){

    return (
      <div className="App">
      <Display/>
    </div>
  );
  }
}

export default App;
