import React from 'react';
import logo from './logo.svg';
import './index.css';
import TopBar from './components/topbar/topbar'
import SideBar from './components/sidebar/SideBar'

function App() {
  return (    

    <div className="App">

      <TopBar/>

      <SideBar/>
      
    </div>
  );
}

export default App;
