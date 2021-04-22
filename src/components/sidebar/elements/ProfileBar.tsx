import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';

const Container = styled.div`
    margin: 30px;
    background-color:white;
    width: 100vh;
    height: 350px;  
    border-radius: 2.9%;
    border: 1px solid white;  
    box-shadow: 10px 10px 10px #ECECEC;
`;

const ProfileSection= styled.div`
    height: 64%;
    width: 100%;
`;

const ProfilePicture = styled.div`
    height: 58%;
    width: 100%;
`;

const ProfileName = styled.div`
    height: 17%;
    width: 100%;
    text-align: center;
    align-items: center;
    font-size: 23px;
    color: #5163af;
    font-weight: bold;
`;

const ProfileDescription = styled.div`
    height: 25%;
    width: 100%;
    text-align: center;
    align-items: center;
    font-size: 19px;
    opacity: 38%;
    border-bottom: 1px solid #c9c8c8;
`;

const YourSection = styled.div`
    height: 36%;
    background-color: #e7e7e7;
    width: 100%;
`;

const NetworkSection = styled.div`
    height: 50%;
    width: 100%;
    background-color: white;
`;

const PublicationsSection = styled.div``;


const ProfileBar = () => {
    return(
        <Container>

            <ProfileSection>

                <ProfilePicture/>
                
                <ProfileName>
                    Humberta Swift
                </ProfileName>

                <ProfileDescription>
                    Job title - Company
                </ProfileDescription>

            </ProfileSection>                

            <YourSection>

                <NetworkSection/>

                <PublicationsSection/>

            </YourSection>
        
        </Container>
    )  
}

export default ProfileBar;
