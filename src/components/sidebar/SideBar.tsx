import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import SideMenu from './elements/SideMenu';
import ProfileBar from './elements/ProfileBar';


const Container = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const SideBar = () => {
    return(
        <Container>
            <ProfileBar/>
            <SideMenu/>
        </Container>
    )  
}

export default SideBar;
