import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 458px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid ${Colors.ownlgray};
    font-size: 22px;
`;

const RowBox = styled.div`
    width: 100%;
    height: 100px;
    margin: 12px 0;
    margin-left: 45px;
`;

const RowTitle = styled.div`
    height: 50%;
    width: 100%;
    color: ${Colors.owngray};
    display: flex;
    align-items: center;
    span{
        margin: 15px;    
    }
    img{
        margin-left: 742px;
    }
`;

const RowBottom = styled.div`
    height: 50%;
    width: 100%;
    color: ${Colors.owngray};
    display: flex;
    align-items: center;
`;

const BottomRowItem = styled.div`
    background-color: #e6f0f3;
    color: ${Colors.ownlblue};
    margin: 10px;    
    padding: 4px 10px;
    border-radius: 7px;
`;

const SecondProfileBar = () => {
    return (
        <Container>
            <RowBox>
                <RowTitle>
                    <span>Expertise</span>
                    <img src="/icons/pen.svg" />
                </RowTitle>
                <RowBottom>
                    <BottomRowItem>Mergers and acquisition</BottomRowItem>
                </RowBottom>
            </RowBox>

            <RowBox>
                <RowTitle>
                    <span>Specialities</span>
                </RowTitle>
                <RowBottom>
                    <BottomRowItem>Cross border operation</BottomRowItem>
                    <BottomRowItem>Transaction over 500M€/$</BottomRowItem>
                </RowBottom>
            </RowBox>

            <RowBox>
                <RowTitle>
                    <span>Admission to practice law</span>
                </RowTitle>
                <RowBottom>
                    <BottomRowItem>Paris bar association</BottomRowItem>
                    <BottomRowItem>Tunisian bar association</BottomRowItem>
                </RowBottom>
            </RowBox>

            <RowBox>
                <RowTitle>
                    <span>Counties</span>
                </RowTitle>
                <RowBottom>
                    <BottomRowItem>Tunisia</BottomRowItem>
                </RowBottom>
            </RowBox>
        </Container>
    )
}

export default SecondProfileBar;