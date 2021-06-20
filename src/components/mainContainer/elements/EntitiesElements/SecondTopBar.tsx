import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 60px;
    width: Calc(100% - 20px);
    font-size: 22px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    background-color: #d1dcff;
`;


const SecondTopBar = () => {
    return (
        <Container>
            No tu beda filtry generalnie taki jest plan
        </Container>
    )
};

export default SecondTopBar;