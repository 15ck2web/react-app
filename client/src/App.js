import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Component/page/Home';
import Header from './Component/modules/Header';
import Footer from './Component/modules/Footer';


class App extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <Home/>
          <Footer/>
        </div>
    );
  }
}


export default App;
