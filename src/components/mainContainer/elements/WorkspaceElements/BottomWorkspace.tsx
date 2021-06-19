import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 306px;
    width: 100%;
    margin-top: 30px;
`;

const TopBar1 = styled.div`
    height: 60px;
    width: Calc(100% - 20px);
    color: ${Colors.owngray};
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

const TopBar2 = styled.div`
    height: 50px;
    width: Calc(100% - 20px);
    color: ${Colors.owngray};
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

const CustomInput = styled(TextField)`
    div{
        height: 40px;       
        align-items: center;
    }     
`;

const BottomWorkspace = () => {
    return (
        <Container>

            <TopBar1>
                Latest updates
                <CustomInput type="text" variant="outlined" placeholder="Filter by title..." />
                
            </TopBar1>
            <TopBar2>

            </TopBar2>

        </Container>
    )
}

export default BottomWorkspace;
