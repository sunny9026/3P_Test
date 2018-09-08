import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
    this.setFlag = this.setFlag.bind(this);
  }

  setFlag(comment){
    this.setState({
        flag : comment
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Post Comments</h1>
        </header>
        <br/>
        <div className="parentContainer">
          { !this.state.flag ? <CommentList  setFlag = {this.setFlag.bind(this)} /> : <CommentForm setFlag = {this.setFlag.bind(this)} /> }
        </div>
      </div>
    );
  }
}

export default App;
