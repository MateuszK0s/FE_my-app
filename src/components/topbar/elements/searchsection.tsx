import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Icon from '../../shared/Icon';

const SearchSection = styled.div`
    background-color: red;
    display: flex;
    width: 100%;
    user-select: none;
`;

const searchSection : FC = () =>{
    return(
        <SearchSection>
            <div className="serachBar"/>
            <Icon icon="search"/>
        </SearchSection>
    )
}
export default searchSection;