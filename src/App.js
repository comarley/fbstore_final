import React, { Component } from 'react';
import Router from "./Router";
import {NavLink} from "react-router-dom";

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink exact to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
    <li><NavLink to='/admin'>Admin</NavLink></li>
    {/*<li><NavLink to='/login'>Login</NavLink></li>*/}
    {/*<li><NavLink to='/signup'>Signup</NavLink></li>*/}
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigation />

        <Router/>
      </div>
    );
  }
}

export default App;
