import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import Icon from '../shared/Icon';

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
    background-color: #696868;
    width: 100%;
    height: 300px;
`;

const WorkspaceBox = styled.div`
    border-radius: 1.5%;
    background-color: white;
    width: 350px;
    height: 100%;
    box-shadow: 10px 10px 10px #ECECEC;
`;

const WorkspaceTopImg = styled.div`
    background-color: red;
    height: 38%;
    width: 100%;
`;

const WorkspaceMiddleSection = styled.div`
    height: 35%;
    display: flex;
    flex-direction: row;
`;

const WorkspaceMidLeft= styled.div`
    background-color: orange;
    height: 100%;
    width: 32%;
    margin: -25px 0 0 15px;
`;

const WorkspaceMidRight= styled.div`
    width: 65%;
    background-color: yellowgreen;
    height:100%;
    color: ${Colors.owngray};
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0 0 10px;
`;

const WorkspaceBottomSection = styled.div`
    background-color: yellow;
    height: 30%;
`;

const WorkspaceBottomTop = styled.div`
    height: 50%;
    background-color: red;
    display: flex;
    flex-direction: row;
`;

const WorkspaceBottomLeft = styled.div`
    background-color: blue;
    width: 42%;
`;

const WorkspaceBottomRight = styled.div`
    background-color: salmon;
    width: 42%;
`;

const WorkspaceBottomUpdate = styled.div`
    color: ${Colors.owngray};
    height: 50%;
`;

const Workspaces = () => {
    return(
        <Container>

                <WorkspacesTopBar>Workspaces</WorkspacesTopBar>

                <WorkspacesContainer>

                    <WorkspaceBox>

                        <WorkspaceTopImg>
                        </WorkspaceTopImg>

                        <WorkspaceMiddleSection>

                            <WorkspaceMidLeft></WorkspaceMidLeft>
                            <WorkspaceMidRight>Clien contract</WorkspaceMidRight>

                        </WorkspaceMiddleSection>

                        <WorkspaceBottomSection>

                            <WorkspaceBottomTop>

                                <WorkspaceBottomLeft></WorkspaceBottomLeft>
                                <WorkspaceBottomRight></WorkspaceBottomRight>

                            </WorkspaceBottomTop>

                            <WorkspaceBottomUpdate>Last update 2 days ago</WorkspaceBottomUpdate>
                        
                        </WorkspaceBottomSection>

                    </WorkspaceBox>

                </WorkspacesContainer>

        </Container>
    )  
}

export default Workspaces;
