import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import FollowedMenu from './FollowedMenu';
import { Colors } from '../../../../styledHelpers/Colors';

const LeftSide = styled.div `
    align-items:center;
    display: inline-flexbox;
    justify-content: center;
    padding-left: 20px;
    img{
        margin-left: 20px;
    }
    color: ${Colors.ownblue};
`;

const TempBox = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

const MenuWrapper = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: left;
    width: 100%;
`;

const ResumeFollowed = () => {

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
                       {dropdownOpen && <FollowedMenu/>}
                       
                   </MenuWrapper>                     
    )
}
export default ResumeFollowed;