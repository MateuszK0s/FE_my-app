import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

const Container = styled.div`
    margin-left: 30px;
    width: 352px;
    height: 210px;
    opacity: 70%;
    color: ${Colors.owngray};
`;

const ItemBar = styled.div`
    display: flex;
    height: 30%;
    :hover{
        background-color: #ECECEC;
    }
`;

const ItemIcon = styled.div`
    height: 100%;
    width: 68px;
    img{
        height: 37px;
        padding-left: 5px;
    }
    display: flex;
    align-items: center;
`;

const ItemName = styled.div`
    font-size: 22px;
    padding-left: 10px;
    display: flex;
    align-items: center;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.owngray};
`;


const SideMenu = () => {
    return (
        <Container>

            <CustomLink to="/test"><ItemBar>
                <ItemIcon><img src="/icons/publications.svg" alt="" /></ItemIcon>
                <ItemName>Publications</ItemName>
            </ItemBar></CustomLink>

            <CustomLink to="/test"><ItemBar>
                <ItemIcon><img src="/icons/ecosystem.svg" alt="" /></ItemIcon>
                <ItemName>Ecosystem</ItemName>
            </ItemBar></CustomLink>

            <CustomLink to="/entities"><ItemBar>
                <ItemIcon><img src="/icons/entities.svg" alt="" /></ItemIcon>
                <ItemName>Entities</ItemName>
            </ItemBar></CustomLink>

        </Container>
    )
}

export default SideMenu;
