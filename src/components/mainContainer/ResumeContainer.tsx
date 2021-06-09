import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import ResumeComments from './ResumeComments';

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
    width: 100%;
    height: 100%;
`;

const Comments = styled.div`
    border-radius: 1.5%;
    background-color: white;
    width: 100%;
    height: calc(100% - 76px);
`;

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const ResumeContainer = () => {
    return(
        <Container>

                <ResumeTopBar>Resume your work</ResumeTopBar>

                <ResumeBottom>

                    <ResumeComments/>
                    
                </ResumeBottom>

        </Container>
    )  
}

export default ResumeContainer;
