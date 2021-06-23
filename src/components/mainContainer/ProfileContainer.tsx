import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import FifthProfileBar from './elements/ProfileElements/FifthProfileBar';
import FourthProfileBar from './elements/ProfileElements/FourthProfileBar';
import MainProfileBar from './elements/ProfileElements/MainProfileBar';
import ProfileFirstBar from './elements/ProfileElements/ProfileFirstBar';
import SecondProfileBar from './elements/ProfileElements/SecondProfileBar';
import SixthProfileBar from './elements/ProfileElements/SixthProfileBar';
import ThirdProfileBar from './elements/ProfileElements/ThirdProfileBar';

const Container = styled.div`
    margin-top: 30px;
    margin-right: 110px;
    margin-left: 30px;
    height: 100vh;
    min-height: 2500px; 
    width: 950px;
    background-color: white;
`;


const ProfileContainer = () => {
    return (
        <MainLayout>
            <Container>
                <ProfileFirstBar />
                <MainProfileBar />
                <SecondProfileBar />
                <ThirdProfileBar />
                <FourthProfileBar/>
                <FifthProfileBar/>
                <SixthProfileBar/>
            </Container>
        </MainLayout>
    )
}

export default ProfileContainer;
