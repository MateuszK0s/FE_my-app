import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';


const HomeMenu = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    :hover{
        cursor: pointer;
    }
`;

const TempText = styled.div`
    padding-left: 18px;
    font-size: 22px;
    font-weight: 600;
    padding-right: 120px;
`;

const homeMenu : FC = () =>{

    return(
        <HomeMenu>
            <img src="/icons/house2.svg" width="32" height="32"/>
            <TempText>Home</TempText>
            <img src="/icons/arrow-down.svg" width="12" height="12"/>
        </HomeMenu>
    )
}
export default homeMenu;