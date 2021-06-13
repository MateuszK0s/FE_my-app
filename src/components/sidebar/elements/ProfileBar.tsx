import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

const Container = styled.div`
    margin: 30px;
    background-color:white;
    width: 352px;
    height: 350px;  
    border-radius: 2.9%;
    border: 1px solid white;  
    box-shadow: 10px 10px 10px #ECECEC;
`;

const ProfileSection= styled.div`
    height: 64%;
    width: 100%;
`;

const PictureSection = styled.div`
    height: 58%;
    width: 100%;
`;

const ProfilePicture = styled.div`
    img{
        height: 99px;
        width: 99px;
        border: 1px solid white;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    display:flex;   
    align-items: center; 
    height: 100%;
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
    width: 100%;
`;

const YourSectionIcon = styled.div`
    height: 100%;
    width: 15%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const YourSectionName = styled.div`
    height: 100%;
    width: 65%;
    float: left;
    font-size: 23px;
    display: flex;
    align-items: center;
    padding-left: 1%;
`;

const YourSectionButton = styled.div`
    height: 50%;
    float: left;
    width: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    border: 2px solid ${Colors.owngray};
    border-radius: 13%;
    img{
        height: 72%;
    }
    margin: 13px 0;
`;

const NetworkSection = styled.div`
    height: 50%;
    width: 100%;
    background-color: white;    
`;

const PublicationsSection = styled.div`
    height: 50%;
    width: 100%;
    background-color: white;   
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.owngray};
`;

const ProfileBar = () => {
    return(
        <Container>

            <ProfileSection>

                <PictureSection>
                    <ProfilePicture>
                        <img src="/icons/dembele.png" height="90px"/>
                    </ProfilePicture>
                </PictureSection>
                
                <ProfileName>
                    Humberta Swift
                </ProfileName>

                <ProfileDescription>
                    Job title - Company
                </ProfileDescription>

            </ProfileSection>                

            <YourSection>

                <NetworkSection>

                    <YourSectionIcon>
                        <img src="/icons/network.png" height="50%"/>
                    </YourSectionIcon>

                    <YourSectionName>
                        Your network
                    </YourSectionName>

                    <YourSectionButton>
                        <img src="/icons/user-plus.svg"/>
                    </YourSectionButton>

                </NetworkSection>
                    
                <PublicationsSection>

                    <YourSectionIcon>
                        <img src="/icons/publications.svg" height="50%"/>
                    </YourSectionIcon>

                    <YourSectionName>
                        Your Publications
                    </YourSectionName>

                    <YourSectionButton>
                        <img src="/icons/plus.svg"/>
                    </YourSectionButton>

                </PublicationsSection>

            </YourSection>
        
        </Container>
    )  
}

export default ProfileBar;