import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';
import useDropdown from 'react-dropdown-hook';

const HomeMenu = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

const TempText = styled.div`
    padding-left: 15px;
    font-size: 22px;
    font-weight: 600;
`;

const homeMenu : FC = () =>{
    return(
        <HomeMenu>
            <img src="/icons/house2.svg" width="32" height="32"/>
            <TempText>Home</TempText>
        </HomeMenu>
    )
}
export default homeMenu;