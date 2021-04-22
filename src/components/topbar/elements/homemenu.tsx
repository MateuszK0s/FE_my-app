import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';
import useDropdown from 'react-dropdown-hook';

const HomeMenu = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const homeMenu : FC = () =>{
    return(
        <HomeMenu>
            <Icon icon="house2" width="28" height="28"/>
        </HomeMenu>
    )
}
export default homeMenu;