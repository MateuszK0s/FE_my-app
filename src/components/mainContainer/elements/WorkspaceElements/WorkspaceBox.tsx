import styled from 'styled-components';
import { IWorkspace } from '../../../../entities/IWorkspace';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    border-radius: 2%;
    background-color: white;
    width: 350px;
    height: 100%;
    min-height: 300px;
    box-shadow: 10px 10px 10px #ECECEC;
`;

const WorkspaceTopImg = styled.div`
    background-image: url(/images/tworkspace.jpg);
    border-radius: 2% 2% 0 0;
    background-size: 350px;
    height: 38%;
    width: 100%;
`;

const WorkspaceMiddleSection = styled.div`
    height: 35%;
    display: flex;
    flex-direction: row;
`;

const WorkspaceMidLeft = styled.div`
    height: 100%;
    width: 32%;
    margin: -25px 0 0 15px;
    box-shadow: 2px 2px 2px 2px #ECECEC;
    background-size: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    img{
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const WorkspaceMidRight = styled.div`
    width: 65%;
    height:100%;
    color: ${Colors.owngray};
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0 0 10px;
`;

const WorkspaceBottomSection = styled.div`
    height: 30%;
    align-items: center;
    font-weight: 500;
`;

const WorkspaceBottomTop = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    font-size: 19px;
    img{
        padding-right: 5px;        
    }
    line-height: 200%;
    color: ${Colors.owngray};
`;

const WorkspaceBottomLeft = styled.div`
    width: 40%;
    padding-left: 15px;
`;

const WorkspaceBottomRight = styled.div`
    width: 40%;
    text-align: end;
`;

const WorkspaceBottomUpdate = styled.div`
    color: ${Colors.owngray};
    height: 50%;
    padding: 7px 0;
    padding-left: 15px;
`;

interface IWorkspaceBox{
    Workspace: IWorkspace;
}

function WorkspaceBox(props: IWorkspaceBox) {
    return (
        <Container>

            <WorkspaceTopImg>
            </WorkspaceTopImg>

            <WorkspaceMiddleSection>

                <WorkspaceMidLeft><img src={props.Workspace.icon}/></WorkspaceMidLeft>
                <WorkspaceMidRight>{props.Workspace.title}</WorkspaceMidRight>

            </WorkspaceMiddleSection>

            <WorkspaceBottomSection>

                <WorkspaceBottomTop>

                    <WorkspaceBottomLeft><img src="/icons/people.svg" />{props.Workspace.type}</WorkspaceBottomLeft>•
                    <WorkspaceBottomRight><img src="/icons/people.svg" /> {props.Workspace.userNumber} users</WorkspaceBottomRight>

                </WorkspaceBottomTop>

                <WorkspaceBottomUpdate>Last update {props.Workspace.update}</WorkspaceBottomUpdate>

            </WorkspaceBottomSection>

        </Container>
    );
}

export default WorkspaceBox;
