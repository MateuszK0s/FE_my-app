import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PublicationBar from './RightSideElements/PublicationBar'
// import Colors from '../../../styledHelpers/Colors';

const Container = styled.div`
    float: left;
    width: calc(100% - 450px);
    height: 100%;
    border-radius: 0% 1.5% 1.5% 0%;
`;

const TopBar = styled.div`
    width: 100%;
    height: 43px;
    font-size: 28px;
    font-weight: 600;
    width: calc(100% - 20px);
    color: #4b5268;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const BottomBar = styled.div`
    width: calc(100% - 20px);
    font-size: 21px;
    font-weight: 400;
    margin-left: 20px;
    color: #5163af;
    margin-top: 15px;
`;

const PublicationRightSide = () => {
    return(
        <Container>
            
            <TopBar>Latest publications</TopBar>

            <PublicationBar/>

            <PublicationBar/>

            <PublicationBar/>

            <BottomBar>See more publications</BottomBar>

        </Container>
    )
};

export default PublicationRightSide;