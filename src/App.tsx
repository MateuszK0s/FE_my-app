import React from 'react';
import logo from './logo.svg';
import './index.css';
import TopBar from './components/topbar/topbar'
import SideBar from './components/sidebar/SideBar'
import MainContainer from './components/mainContainer/MainContainer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (    

    <div className="App">

      <TopBar/>

      <Container>

        <SideBar/>

        <MainContainer/>

      </Container>
      

      
    </div>
  );
}

export default App;
