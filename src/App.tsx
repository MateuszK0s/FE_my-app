import { useEffect, useState } from 'react';
import './index.css';
import TopBar from './components/topbar/topbar'
import SideBar from './components/sidebar/SideBar'
import styled from 'styled-components';
import { setUsers } from './features/usersSlice';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/postsSlice';
import { setComments } from './features/commentsSlice';
import { setPhotos } from './features/photosSlice';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from './components/mainContainer/MainContainer';
import WorkspacesContainer from './components/mainContainer/WorkspacesContainer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {

  const dispatch = useDispatch();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const initApp = async () => {

      Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(data => {
          dispatch(setUsers(data))
        }),
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
        .then(data => {
          dispatch(setPosts(data))
        }),
        fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json())
        .then(data => {
          dispatch(setComments(data))
        }),
        fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json())
        .then(data => {
          dispatch(setPhotos(data))
        })
      ]).then(() => {
        setReady(true);
      })
    }
    initApp();
  }, [])


  return (

    <div className="App">
      {ready && <Router>
        <TopBar />
        <Container>
          <SideBar />
          <Switch>
            <Route exact path="/" component={MainContainer}/>            

            <Route path="/workspaces" component={WorkspacesContainer}/>            
            {/* <Route path="/workspaces" >
              <MainWorkspaces />
            </Route>
            <Route path="/" exact>
              <MainContainer />
            </Route> */}

          </Switch>
        </Container>
      </Router>}
    </div>
  );
}

export default App;
