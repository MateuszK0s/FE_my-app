import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import IUser from '../../entities/IUser';
import useComments from '../../features/hooks/useComments';
import useUsers from '../../features/hooks/useUsers';
import ResumeComments from './elements/ResumeElements/ResumeComments';
import Pagination from '@material-ui/lab/Pagination';


const Container = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ResumeTopBar = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 28px;
    font-weight: 600;
    color: #4b5268;
`;

const ResumeBottom = styled.div`
    width: 100%;
    height: 100%;
`;

const Comments = styled.div`
    border-radius: 1.5%;
    background-color: white;
    width: 100%;
    height: calc(100% - 76px);
`;

const CustomPagination = styled(Pagination)`
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
    margin-bottom: -80px;
`;

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}



const ResumeContainer = () => {

    const comments = useComments();
    const users = useUsers();

    console.log(comments.length);

    const [commentsItems, setCommentsItems] = useState(comments);

    const [pageNumber, setPageNumber] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const pageCounter = 500 / postsPerPage;


    const indexOfLastPost = pageNumber * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Object.values(comments).slice(indexofFirstPost, indexOfLastPost);

    const paginate = (test : number) => setPageNumber(test)

    const getUser = (id: number): IUser => {
        return Object.values(users).filter(_user => _user.id == id)[0];
    }

    const handlePagination = (event: any, currentPage: number) => {
        setPageNumber(currentPage);
    }

    
    return (
        <Container>

            <ResumeTopBar>Resume your work</ResumeTopBar>

            <div>
                <ResumeBottom>
                    {Object.values(currentPosts).map((_comment, idx) =>
                        <ResumeComments key={idx} user={getUser(_comment.postId)} comment={_comment} />
                    )}
                </ResumeBottom>

                <CustomPagination count={pageCounter} shape="rounded" onChange={handlePagination} />
            </div>

        </Container>
    )
}



export default connect(state => state, {})(ResumeContainer);
