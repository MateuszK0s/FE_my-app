import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 320px;
    width: 100%;
    align-items: center;
    font-size: 22px;
`;

const BoxTitle = styled.div`
    margin: 0px 55px;
    margin-top: 30px;
    width: Calc(100% - 110px);
    font-size: 25px;
    font-weight: 600;
`;

const CustomTable = styled.table`
    margin: 20px 55px;
    width: Calc(100% - 110px);
    th{
        font-weight: 600;
        padding-bottom: 0px;
        text-align: left;
    }
    td{
        width: 20%;
    }
`;

const SixthProfileBar = () => {
    return (
        <Container>

            <BoxTitle>Amount of fees</BoxTitle>
            <CustomTable>
                <tr>
                    <th>Year</th>
                    <th>Cost center</th>
                    <th>Total amount</th>
                    <th>Law firm</th>
                </tr>

                <tr>
                    <td>2019</td>
                    <td>CS 153</td>
                    <td>3 500€</td>
                    <td>Clifford chance</td>
                </tr>

                <tr>
                    <td>2018</td>
                    <td>CS 153</td>
                    <td>9 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td>2017</td>
                    <td>CS 47</td>
                    <td>10 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td></td>
                    <td>CS 153</td>
                    <td>18 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td></td>
                    <td>CS 32</td>
                    <td>15 500€</td>
                    <td>Linklaters</td>
                </tr>

            </CustomTable>
        </Container>
    )
}

export default SixthProfileBar;