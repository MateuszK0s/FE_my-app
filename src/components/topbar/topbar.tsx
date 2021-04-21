import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import HomeMenu from './elements/homemenu';
import NotificationBar from './elements/rightside';
import SearchSection from './elements/searchsection';

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
    width: 100%;
`;

const NavBar = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: row;
    width: 300px;
    min-width: 300px;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 300px;
    min-width: 300px;
`;

const MainLogo = styled.div`
    margin: 7px;
`;

const topBar = () => {
    return (
        <TopBar>
            <NavBar>
                <MainLogo><img src="/icons/atom.png" height="46"/></MainLogo>                      
                <HomeMenu/>                             
            </NavBar>

            <SearchSection/>

            <RightSide>
                <NotificationBar/>
            </RightSide>            
        </TopBar>
    )
}
export default topBar;

