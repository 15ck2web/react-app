import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Header from './Component/modules/Header';
import Footer from './Component/modules/Footer';
import Highlight from './Component/page/Highlights';
import Detail from './Component/page/Detail';
import Order from './Component/page/Order';
import Payhistory from './Component/page/Payhistory';
import Profile from './Component/page/Profile';
import Search from './Component/page/Search';
import Type from './Component/page/Type';
import Login from './Component/auth/Login';
import Addauth from './Component/auth/Addauth';
class App extends React.Component {
  render() {
    return (
        <div>
          <Profile/>
          
        </div>
    );
  }
}


export default App;
