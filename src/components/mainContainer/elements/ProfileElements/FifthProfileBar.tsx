import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 330px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid ${Colors.ownlgray};
    font-size: 22px;
`;

const BoxTitle = styled.div`
    margin: 40px 55px;
    width: Calc(100% - 110px);
    font-size: 25px;
    font-weight: 600;
`;

const BottomBox = styled.div`
    margin: 0 55px;
    width: Calc(100% - 110px);
    font-size: 25px;
    font-weight: 600;
`;

const CustomTable = styled.table`
    margin: 40px 55px;
    width: Calc(100% - 110px);
    th{
        font-weight: 600;
        padding-bottom: 20px;
        border-bottom: 1px solid ${Colors.ownlgray};
        text-align: left;
    }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


const FourthProfileBar = () => {
    return (
        <Container>

            <BoxTitle>Internal reviews</BoxTitle>
            <CustomTable>
                <tr>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Data</th>
                </tr>

                <tr>
                    <td>Operation Ti...</td>
                    <td>Renault Co ...</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/01/2018</td>
                </tr>

                <tr>
                    <td>Op. Prometh...</td>
                    <td>Renault HQ</td>
                    <td>USA</td>
                    <td>#M&A</td>
                    <td>18/02/2019</td>
                </tr>

                <tr>
                    <td>Op. Latandre</td>
                    <td>Renault Br ...</td>
                    <td>Italia</td>
                    <td>#Social</td>
                    <td>18/02/2019</td>
                </tr>
            </CustomTable>

            <BottomBox><CustomLink to="/test">See more Reviews</CustomLink></BottomBox>

        </Container>
    )
}

export default FourthProfileBar;