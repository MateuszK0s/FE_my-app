import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import MainPublication from './MainPublication'

const Container = styled.div`
    margin-top: 30px;
    margin-right: 110px;
    margin-left: 30px;
    height: 100vh;
    max-width: 1405px;
`;

const MainContainer = () => {
    return (
        <MainLayout>
            <Container>
                <MainPublication />
            </Container>
        </MainLayout>
    )
}

export default MainContainer;
