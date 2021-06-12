import styled from 'styled-components';
import SideMenu from './elements/SideMenu';
import ProfileBar from './elements/ProfileBar';

const Container = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const SideBar = () => {
    return(
        <Container>
            <ProfileBar/>
            <SideMenu/>
        </Container>
    )  
}

export default SideBar;
