import styled from 'styled-components';
import MyCarousel from './elements/WorkspaceElements/Carousel';

const Container = styled.div`
    height: 390px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const WorkspacesTopBar = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 28px;
    font-weight: 600;
    color: #4b5268;
`;

const WorkspacesContainer = styled.div`
    width: 100%;
    height: 300px;
`;

const Workspaces = () => {
    return(
        <Container>

                <WorkspacesTopBar>Workspaces</WorkspacesTopBar>

                <WorkspacesContainer>
 
                    <MyCarousel/>                                  

                </WorkspacesContainer>

        </Container>
    )  
}

export default Workspaces;
