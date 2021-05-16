import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';

const NotificationBar = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;
`;

const NotificationIcon = styled.div`
    padding-left: 35px;
`;

const homeMenu : FC = () =>{
    return(
        <NotificationBar>
            <NotificationIcon><img src="/icons/house.svg" height="30"/></NotificationIcon>
            <NotificationIcon><img src="/icons/comments.svg" height="30"/></NotificationIcon>
            <NotificationIcon><img src="/icons/bell.svg" height="30"/></NotificationIcon>
        </NotificationBar>
    )
}
export default homeMenu;