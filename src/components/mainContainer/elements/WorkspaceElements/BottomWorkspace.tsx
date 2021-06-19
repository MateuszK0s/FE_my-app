import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import { TextField } from '@material-ui/core';
import useComments from '../../../../features/hooks/useComments';
import useUsers from '../../../../features/hooks/useUsers';
import IUser from '../../../../entities/IUser';
import WorkspaceComments from './WorkspaceComments';
import IconTopBar from './IconTopBar';
import UpdateFollowed from './UpdateFollowed';


const Container = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TopBar1 = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 28px;
    font-weight: 600;
    color: #4b5268;
    padding-top: 20px;
`;

const TopBar2 = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-top: 20px;
    background-color: blue;
`;

const CustomInput = styled(TextField)`
    div{
        height: 40px;       
        align-items: center;     
        background-color: white;   
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

const BottomWorkspace = () => {

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

            <TopBar1>
                Latest updates
                <FilterBox>
                    <CustomInput type="text" variant="outlined" placeholder="Filter by title..." />
                    <UpdateFollowed />
                </FilterBox>
            </TopBar1>

            <IconTopBar/>

            <div>
                <ResumeBottom>
                    {Object.values(currentPosts).map((_comment, idx) =>
                        <WorkspaceComments key={idx} user={getUser(_comment.postId)} comment={_comment} />
                    )}
                </ResumeBottom>

                <CustomPagination count={pageCounter} shape="rounded" onChange={handlePagination} />
            </div>

        </Container>
    )
}



export default connect(state => state, {})(BottomWorkspace);
