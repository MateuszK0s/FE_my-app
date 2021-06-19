import styled from 'styled-components';
import BottomWorkspace from './elements/WorkspaceElements/BottomWorkspace';
import MainWorkspace from './elements/WorkspaceElements/MainWorkspace';
import MiddleWorkspace from './elements/WorkspaceElements/MiddleWorkspace';

const Container = styled.div`
    margin-top: 30px;
    margin-right: 60px;
    margin-left: 30px;
    height: 100vh;
    width: 100%;
`;

const WorkspacesContainer = () => {
    return(
        <Container>

            <MainWorkspace/>

            <MiddleWorkspace/>

            <BottomWorkspace/>

        </Container>
    )  
}

export default WorkspacesContainer;
