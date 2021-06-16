import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

const NotificationBar = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;
`;

const NotificationHome = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const NotificationIcon = styled.div`
    margin-left: 15px;
    background-color: #dadada;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    padding: 6px;
    display: flex;
    align-items: center;
    img{
        margin-left: auto;
        margin-right: auto;
    }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.owngray};
`;

const CornerImg = styled.div`
    background-color: #0381be;
    position: absolute;
    height: 19px;
    width: 26px;
    color: white;
    font-size: 13px;
    border-radius: 40%;
    text-align: center;
    margin: -37px 0 0 24px;
`;

const homeMenu : FC = () =>{
    return(
        <NotificationBar>
            <NotificationHome><CustomLink to="/"><img src="/icons/house.svg" alt="" height="32"/></CustomLink></NotificationHome>
            <NotificationIcon><img src="/icons/comments.svg" height="30" alt=""/>
                <CornerImg>3</CornerImg>
            </NotificationIcon>
            <NotificationIcon><img src="/icons/bell.svg" height="30" alt=""/>
                <CornerImg>3</CornerImg>
            </NotificationIcon>
        </NotificationBar>
    )
}
export default homeMenu;