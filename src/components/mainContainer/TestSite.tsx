import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import MainLayout from '../layout/MainLayout';


const Container = styled.div`
    margin-top: 30px;
    margin-right: 110px;
    margin-left: 30px;
    height: 100vh;
    max-width: 1405px;
    color: ${Colors.owngray};
    font-size: 26px;
`;

const TestSite = () => {
    return (
        <MainLayout>
            <Container>
                Test site...
            </Container>
        </MainLayout>
    )
}

export default TestSite;
