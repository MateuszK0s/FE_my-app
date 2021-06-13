import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Container = styled.div`
    border-radius: 1.5%;
    background-color: white;
    width: 100%;
    height: 150px;
    box-shadow: 10px 10px 10px #ECECEC;
`;

const CommentTitle = styled.div`
    height:25%;
    color: ${Colors.ownblue};
    font-size: 28px;
    padding: 5px 10px 0px 10px;
`;

const CommentBody = styled.div`
    height:50%;
    color: ${Colors.owngray};
    padding: 0px 10px;
    font-size: 17px;
`;

const CommentBottom = styled.div`
    height:25%;
    color: ${Colors.owngray};
    padding: 5px 10px 0px 10px;
`;

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const ResumeComments = () => {
    return(
        <Container>

            <CommentTitle>World company SAS</CommentTitle>

            <CommentBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in suscipit velit, quis fermentum dui. Aenean vulputate ullamcorper ipsum, a eleifend libero consequat sed. Vivamus mauris orci, sagittis sit amet consectetur pellentesque, congue id enim. Sed consequat neque ac dui gravida facilisis.  

            </CommentBody>

            <CommentBottom>Bottom</CommentBottom>

        </Container>
    )  
}

export default ResumeComments;
