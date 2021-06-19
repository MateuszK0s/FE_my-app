import { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Wrapper = styled.div`
    position: absolute;
    top: 1000px;
    left: 1595px;
    background: white;
    padding: 10px;
    border-radius: 2%;
    border: 1px solid ${Colors.ownlgray};  
    border-top: 0;
    width: 145px;
`;

const Menu = styled.div`
    background: white;
    width: 100%;
    list-style-type: none;
    color: ${Colors.ownblue};
    font-weight: 500;
    font-size: 22px;
    li{
        cursor: pointer;
        margin-bottom: 5px;
        &:hover{
            background-color: ${Colors.ownlgray};
        }
    }
`;

export const FollowedMenu: FC = () => {

    return (
        <Wrapper>
            <Menu>
                <li>My</li>
                <li>All</li>
            </Menu>
        </Wrapper>
    );
};

export default FollowedMenu;