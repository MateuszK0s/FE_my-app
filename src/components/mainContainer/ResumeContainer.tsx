import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import IUser from '../../entities/IUser';
import useComments from '../../features/hooks/useComments';
import useUsers from '../../features/hooks/useUsers';
import ResumeComments from './elements/ResumeElements/ResumeComments';
import Pagination from '@material-ui/lab/Pagination';
import { TextField } from '@material-ui/core';
import ResumeFollowed from './elements/ResumeElements/ResumeFollowed';


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

const CustomInput = styled(TextField)`
    div{
        height: 40px;       
        align-items: center;        
    }   
    margin-right: 10px;
`;

const ResumeBottom = styled.div`
    width: 100%;
    height: 100%;
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

const FilterBox = styled.div`
    margin-left: 50%;
    display: flex;
`;

const ResumeContainer = () => {

    const comments = useComments();
    const users = useUsers();

    const [pageNumber, setPageNumber] = useState(1);
    const [postsPerPage] = useState(20);
    const pageCounter = 500 / postsPerPage;

    const indexOfLastPost = pageNumber * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Object.values(comments).slice(indexofFirstPost, indexOfLastPost);

    const getUser = (id: number): IUser => {
        return Object.values(users).filter(_user => _user.id == id)[0];
    }

    const handlePagination = (event: any, currentPage: number) => {
        setPageNumber(currentPage);
    }
    
    return (
        <Container>

            <ResumeTopBar>
                Resume your work
                <FilterBox>
                <CustomInput type="text" variant="outlined" placeholder="Filter by title..." />
                <ResumeFollowed/>

                </FilterBox>
                
            </ResumeTopBar>

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
