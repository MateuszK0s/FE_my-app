import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Colors } from '../../../../styledHelpers/Colors';
import EFollowedMenu from './EFollowedMenu';

const LeftSide = styled.div `
    align-items:center;
    display: inline-flexbox;
    justify-content: center;
    padding: 5px;
    img{
        margin-left: 2px;
    }
    color: ${Colors.ownblue};
    border: 1px solid ${Colors.ownblue};
    margin-left: 80px;

`;

const TempBox = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    span{
        padding-right: 5px;
    }
`;

const MenuWrapper = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: left;
    width: 100%;
`;

const EntitiesFollowed = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }
    return (
 
                <MenuWrapper ref={wrapperRef}>

                        <LeftSide>

                            <img src="icons/settings.svg" alt="" height="26px"/>

                            <TempBox onClick={menuHandler}>
                                <span> Followed </span>
                                
                                <img src="icons/arrow-down.svg" alt="" height="9px"/>                        
                            </TempBox> 

                       </LeftSide>
                       {dropdownOpen && <EFollowedMenu/>}
                       
                   </MenuWrapper>                     
    )
}
export default EntitiesFollowed;