import { TextField } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';

const SearchSection = styled.div`
    display: flex;
    width: 100%;
    margin-left: 200px;
    margin-right: 200px;
`;

const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 8px;
`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
`;

const CustomInput = styled(TextField)`
    div{
        height: 40px;       
        align-items: center;
    }     
`;

const InputContainer = styled.div`
    width: 90%;
    position: relative;
`;

const searchSection: FC = () => {
    return (
        <SearchSection>
            
            <SearchBar>

                <InputContainer >

                    <div>
                        <SearchIcon />
                    </div>

                    <CustomInput type="text" fullWidth variant="outlined" placeholder="Search Legalcluster"/>

                    <SearchIcon><img src="/icons/search.svg" width="22" height="22" alt="" /></SearchIcon>

                </InputContainer>

            </SearchBar>           

        </SearchSection>
    )
}
export default searchSection;