import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';

const SideBar = styled.div`
    background-color: red;
    width: 100px;
    height: 100px;
`;

const sideBar = () => {
    return(
        <SideBar></SideBar>
    )  
}

export default sideBar;
