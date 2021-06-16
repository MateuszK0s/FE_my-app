import styled from 'styled-components';
import { ExpandedMenu } from './elements/ExpendedMenu';
import NotificationBar from './elements/rightside';
import SearchSection from './elements/searchsection';
import useDropdown from 'react-dropdown-hook';
import { Colors } from '../../styledHelpers/Colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
    width: 100%;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    min-width: 350px;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 350px;
    min-width: 350px;
`;

const MainLogo = styled.div`
    margin: 7px;
`;

const LeftSide = styled.div `
    align-items:center;
    display: inline-flexbox;
    justify-content: center;
    margin: 10px;
    padding: 4px;
    img{
        margin-left: 40px;
    }
`;

const TempBox = styled.div`
    margin-left: 50px;
`;

const MenuWrapper = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: left;
    margin-left: 40px;
    width: 100%;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.owngray};
`;

const TopBar = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }
    return (
        <Container>
            <NavBar>
                <MainLogo><CustomLink to="/"><img src="/icons/atom.png" alt="" height="46"/></CustomLink></MainLogo>                      
                <MenuWrapper ref={wrapperRef}>

                        <LeftSide onClick={menuHandler}>

                            <img src="icons/house2.svg" alt="" height="30px"/>

                            <TempBox>
                                <span> Home </span>
                                
                                <img src="icons/arrow-down.svg" alt="" height="9px"/>                        
                            </TempBox> 

                       </LeftSide>
                       {dropdownOpen && <ExpandedMenu/>}
                       
                   </MenuWrapper>                     
            </NavBar>

            <SearchSection/>

            <RightSide>
                <NotificationBar/>
            </RightSide>            
        </Container>
    )
}
export default TopBar;