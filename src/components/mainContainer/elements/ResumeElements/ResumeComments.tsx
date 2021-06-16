import styled from 'styled-components';
import IComments from '../../../../entities/IComments';
import IUser from '../../../../entities/IUser';
import { Colors } from '../../../../styledHelpers/Colors';


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
    display: flex;
    flex-direction: row;
`;

const CommentCorp = styled.div`
    margin-right: 20px;
`;

const CommentType = styled.div`
    margin-right: 20px;
`;

const CommentUpdate = styled.div`
    margin-right: 20px;
`;

interface Props{
    comment?: IComments;
    user?: IUser | null;
}

function ResumeComments(props: Props ) {
    return(
        <Container>

            <CommentTitle>{props.comment?.name}</CommentTitle>

            <CommentBody>{props.comment?.body}</CommentBody>

            <CommentBottom>

                <CommentCorp>
                   zdj  {props.user?.name}
                </CommentCorp>

                <CommentType>
                    Client contract
                </CommentType>

                <CommentUpdate>
                    Updated 3 days ago by {props.user?.name}
                </CommentUpdate>

            </CommentBottom>

        </Container>
    );
}

export default ResumeComments;
