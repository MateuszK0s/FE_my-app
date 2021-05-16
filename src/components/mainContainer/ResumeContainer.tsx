import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';

const Container = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ResumeTopBar = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 28px;
    font-weight: 600;
    color: #4b5268;
`;

const ResumeBottom = styled.div`
    border-radius: 1.5%;
    background-color: white;
    width: 100%;
    height: calc(100% - 76px);
`;

const ResumeContainer = () => {
    return(
        <Container>

                <ResumeTopBar>Resume your work</ResumeTopBar>

                <ResumeBottom/>

        </Container>
    )  
}

export default ResumeContainer;
