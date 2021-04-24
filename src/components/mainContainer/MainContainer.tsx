import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import MainPublication from './elements/MainPublication'

const Container = styled.div`
    margin-top: 30px;
    margin-right: 110px;
    margin-left: 30px;
    background-color:#f5f3f3;
    height: 100vh;
    width: 100%;
`;

const MainContainer = () => {
    return(
        <Container>

            <MainPublication/>

        </Container>
    )  
}

export default MainContainer;
