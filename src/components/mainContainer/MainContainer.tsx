import styled from 'styled-components';
import MainPublication from './MainPublication'

const Container = styled.div`
    margin-top: 30px;
    margin-right: 110px;
    margin-left: 30px;
    height: 100vh;
    max-width: 1405px;
`;

const MainContainer = () => {
    return(
        <Container>

            <MainPublication/>

        </Container>
    )  
}

export default MainContainer;
