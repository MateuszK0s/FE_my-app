import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';

const Container = styled.div`
    margin-left: 30px;
    width: 352px;
    height: 210px;
    opacity: 70%;
`;

const ItemBar = styled.div`
    display: flex;
    height: 30%;
`;

const ItemIcon = styled.div`
    height: 100%;
    width: 68px;
    img{
        height: 37px;
        padding-left: 5px;
    }
    display: flex;
    align-items: center
`;

const ItemName = styled.div`
    font-size: 22px;
    padding-left: 10px;
    display: flex;
    align-items: center
`;


const SideMenu = () => {
    return(
        <Container>

            <ItemBar>
                <ItemIcon><img src="/icons/publications.svg"/></ItemIcon>
                <ItemName>Publications</ItemName>
            </ItemBar>

            <ItemBar>
                <ItemIcon><img src="/icons/ecosystem.svg"/></ItemIcon>
                <ItemName>Ecosystem</ItemName>
            </ItemBar>

            <ItemBar>
                <ItemIcon><img src="/icons/entities.svg"/></ItemIcon>
                <ItemName>Entities</ItemName>
            </ItemBar>

        </Container>
    )  
}

export default SideMenu;
