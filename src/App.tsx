import React, { useEffect } from 'react';
import logo from './logo.svg';
import './index.css';
import TopBar from './components/topbar/topbar'
import SideBar from './components/sidebar/SideBar'
import MainContainer from './components/mainContainer/MainContainer';
import styled from 'styled-components';
import { setUsers } from './features/usersSlice';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/postsSlice';
import { setComments } from './features/commentsSlice';
import { setPhotos } from './features/photosSlice';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    const initApp = async () =>{
      fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(data => {
            dispatch(setUsers(data))
        });

        fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
        .then(data => {
            dispatch(setPosts(data))
        });    

        fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json())
        .then(data => {
            dispatch(setComments(data))
        });   

        fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json())
        .then(data => {
            dispatch(setPhotos(data))
        });   
    }
    initApp();
  },[])


  return (    

    <div className="App">
      <Router>
        <TopBar/>

        <Container>

          <SideBar/>

            <Switch>

              <Route path="/" exact>

                <MainContainer/>

              </Route>
              
            </Switch>

        </Container>
      </Router>
    </div>
  );
}

export default App;
