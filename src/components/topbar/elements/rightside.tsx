import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';

const NotificationBar = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const NotificationIcon = styled.div`
    padding-left: 20px;
`;

const homeMenu : FC = () =>{
    return(
        <NotificationBar>
            <NotificationIcon><Icon icon="house" height="30"/></NotificationIcon>
            <NotificationIcon><Icon icon="comments" height="30"/></NotificationIcon>
            <NotificationIcon><Icon icon="bell" height="30"/></NotificationIcon>
        </NotificationBar>
    )
}
export default homeMenu;