import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import EntitiesFollowed from './EntitiesFollowed';
import SecondBarLeftSide from './SecondBarLeftSide';

const Container = styled.div`
    height: 60px;
    width: Calc(100% - 20px);
    font-size: 22px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    margin-left: 20px;
`;

const RightSide = styled.div`
    width: 30%;
    display: flex;
`;

const Lence = styled.div`
    img{
        position: absolute;
        margin-left: 36px;
        margin-top: 11px;
    }
`;

const CustomInput = styled(TextField)`
    div{
        height: 40px;       
        align-items: center;  
        width: 180px;    
        margin-left: 10px;
    }   
    width: 180px;    
`;


const SecondTopBar = () => {
    return (
        <Container>

            <SecondBarLeftSide/>

            <RightSide>
                <CustomInput type="text" variant="outlined" placeholder="Filter by title..." />

                <Lence>
                    <img src="/icons/search.svg" />
                </Lence>
                
                <EntitiesFollowed />
            </RightSide>

        </Container>
    )
};

export default SecondTopBar;