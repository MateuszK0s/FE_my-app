import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(31% - 43px);
    width: calc(100% - 20px);
    margin: 15px 0px 0px 20px;
`;

const PublicationImage = styled.div`
    height: 100%;
    float:left;
    margin-right: 14px;
    img{
        height: 100%;
    }
`;

const PublicationName = styled.div`
    height: 70%;
    width: 100%;
    font-size: 21px;
    color: #4b5268;
`;

const BottomPublicationBar = styled.div`
    height: 30%;
`;

const BottomData = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 84px;
    align-items: center;
    margin-left: 7px;
`;

const BottomImage = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    margin: 0 7px;
    img{
        max-height: 100%;
        max-width: 100%;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const BottomName = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 80px;
    align-items: center;
`;

const PublicationBar = () => {
    return(
        <Container>

            <PublicationImage><img src="/images/rpublication.jpg"/></PublicationImage>

            <PublicationName>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PublicationName>

            <BottomPublicationBar>

                <BottomData>7 jan. 2020</BottomData>

                <BottomImage><img src="/icons/dembele.png"/></BottomImage>

                <BottomName>John Doe</BottomName>

            </BottomPublicationBar>

        </Container>
    )  
}

export default PublicationBar;
