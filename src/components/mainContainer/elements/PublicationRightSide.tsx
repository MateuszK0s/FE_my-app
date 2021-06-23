import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import PublicationBar from './RightSideElements/PublicationBar'
// import Colors from '../../../styledHelpers/Colors';

const Container = styled.div`
    float: left;
    width: calc(100% - 450px);
    height: 100%;
    border-radius: 0% 1.5% 1.5% 0%;
`;

const TopBar = styled.div`
    width: 100%;
    height: 43px;
    font-size: 28px;
    font-weight: 600;
    width: calc(100% - 20px);
    color: ${Colors.owngray};
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const BottomBar = styled.div`
    width: calc(100% - 20px);
    font-size: 21px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 15px;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.ownblue};
`;

const PublicationRightSide = () => {
    return(
        <Container>
            
            <TopBar>Latest publications</TopBar>

            <PublicationBar/>

            <PublicationBar/>

            <PublicationBar/>

            <BottomBar><CustomLink to="/test">See more publications</CustomLink></BottomBar>

        </Container>
    )
};

export default PublicationRightSide;