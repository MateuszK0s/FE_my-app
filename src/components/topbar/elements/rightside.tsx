import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import Icon from '../../shared/Icon';

const NotificationBar = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;
`;

const NotificationIcon = styled.div`
    padding-left: 35px;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.owngray};
`;

const homeMenu : FC = () =>{
    return(
        <NotificationBar>
            <NotificationIcon><CustomLink to="/"><img src="/icons/house.svg" height="30"/></CustomLink></NotificationIcon>
            <NotificationIcon><img src="/icons/comments.svg" height="30"/></NotificationIcon>
            <NotificationIcon><img src="/icons/bell.svg" height="30"/></NotificationIcon>
        </NotificationBar>
    )
}
export default homeMenu;