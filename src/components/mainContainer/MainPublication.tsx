import styled from 'styled-components';
import PublicationRightSide from './elements/PublicationRightSide';
import ResumeContainer from './ResumeContainer';
import Workspaces from './Workspaces';


const Container = styled.div`
    background-color:white;
    border-radius: 1.5%;
    box-shadow: 10px 10px 10px #ECECEC;
    height: 480px;
    width: 100%;
    margin-right: 60px;
`;

const LeftSide = styled.div`
    float:left;
    background-color: #4b5268;
    width: 450px;
    height: 100%;
    border-radius: 1.5% 0% 0% 1.5%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 1.5% 0% 0% 1.5%;    
        image-rendering: linear-gradient(#e66465, #9198e5);        
    }   
`;

const MainPublication = () => {
    return(
        <Container>

            <LeftSide><img src="/images/mpublication.jpg"/></LeftSide>

            <PublicationRightSide/>

            <Workspaces/>

            <ResumeContainer/>

        </Container>
    )  
}

export default MainPublication;
