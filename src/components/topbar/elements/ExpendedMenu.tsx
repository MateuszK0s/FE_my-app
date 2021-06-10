import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

const Wrapper = styled.div `
    position: absolute;
    top: 60px;
    left: 140px;
    background: white;
    padding: 10px;
    border-radius: 2%;
    border: 1px solid ${Colors.ownlgray};  
    border-top: 0;
    z-index: 10;
    width: 250px;
`;

const Menu = styled.div `
    background: white;
    width: 100%;
`;

const InputWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const CustomInput = styled.input `
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #e0dcdc;  
    text-align: left;
    &::placeholder{
        color: ${Colors.owngray};
    }   
`;

const CustomImg = styled.img ` 
    margin-right: 15px;
        width: 25px;
        height: 25px;
`;

const MenuList = styled.ul ` 
    padding: 0 16px;
    list-style-type: none;
    span{
        color: #adacac;
        font-weight: 700;
    }
`;

const UserList = styled.ul `
    padding: 0 16px;
    list-style-type: none;
    span{
        color: #adacac;
        font-weight: 700;
    }
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;
`;

const PlatformItem = styled.li`
    align-items:center;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;
`;

const WorkspacesItem = styled.li `
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;
`;

const AccountItem = styled.li ` 
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
`;

const NameBox = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
`;

const UserDiv = styled.div ` 
    display: flex;
    align-items: center;
`;

const UserImg = styled.img ` 
    height: 38px;
    width: 38px;
    border: 0px solid white;
    border-radius: 50%;
`;

const RightSite = styled.div ` 
    padding-left: 5px;
    width: calc(100%-35px);
`;

const Name = styled.div `
    color: black;
    height: 55%;
    width: 100%;
    max-width: 100%;
`;

const Description = styled.div ` 
    color: #5163af;
    height: 45%;
`;

const LogOutButton = styled.div ` 
    font-size: 16;
    color: ${Colors.owngray};
    padding: 10px 0 5px 0;
    border-top: 1px solid ${Colors.ownlgray};
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
`;

const Scroll = styled.div `
    overflow: scroll;
    overflow-x: hidden;
`;

export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return(
        <Wrapper>
                <Menu>
                    <InputWrapper>
                        <CustomInput placeholder="Filter...." value={inputText} onChange={inputHandler} type="text" />
                    </InputWrapper>
                    <Scroll>
                    <MenuList>
                    <span>Platform</span>
                        <PlatformItem>
                            {'Home'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/house2.svg" alt=""></CustomImg>Home</li>}
                            {'Publications'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/publications.png" alt=""></CustomImg>Publications</li>}
                            {'People'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/people.png" alt=""></CustomImg>People</li>}
                            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/entities.png" alt=""></CustomImg>Entities</li>}
                            {'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/administration.png" alt=""></CustomImg>Administration</li>}
                        </PlatformItem>
                        <span>Workspaces</span>
                        <WorkspacesItem>
                            {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/entities2.png" alt=""></CustomImg>Client contract</li>}
                            {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/cog.png" alt=""></CustomImg>Supplier contract</li>}
                            {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/entities2.png" alt=""></CustomImg>Corporate</li>}
                            {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/network.png" alt=""></CustomImg>Group Norms</li>}
                            {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/publications.png" alt=""></CustomImg>Real estate contracts</li>}
                        </WorkspacesItem>
                        
                    </MenuList>
                    </Scroll>
                    <UserList>
                    <span>Account</span>
                        <AccountItem>
                            <li>
                                <NameBox>
                                    <UserDiv><UserImg src="icons/dembele.png"/></UserDiv>
                                    <RightSite>
                                        <Name>Humberta Swift</Name>
                                        {'See Profile'.toLowerCase().includes(inputText.toLowerCase()) && <Description>See Profile</Description>}
                                    </RightSite>
                                </NameBox>
                            </li>                        
                            {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/privacy.png" alt=""></CustomImg>Privacy</li>}
                            {'Settings'.toLowerCase().includes(inputText.toLowerCase()) && <li><CustomImg src="icons/settings.png" alt=""></CustomImg>Settings</li>}
                        </AccountItem>                        
                    </UserList>                    
                    <LogOutButton>
                        <CustomImg src="icons/logout.png" alt=""></CustomImg><span>Logout</span>
                    </LogOutButton>
                </Menu>
        </Wrapper>
    );
};

export default ExpandedMenu;