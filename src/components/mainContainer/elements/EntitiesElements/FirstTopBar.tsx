import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 60px;
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    span{
        padding-left: 20px;
    }
    img{
        padding-left: 10px;
    }
`;

const LSide = styled.div`
    width: 90%;
`;

const RSide = styled.div`
    width: 8%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const CustomButton = styled.button`
    width: 50%;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    color: ${Colors.ownblue};
    font-weight: 600;
    border-radius: 0 0 0 0;
    box-shadow: 8px 8px 8px #ECECEC;
    border: 0px solid black;
    :hover{
        background-color: #e2ebff;
    }
`;

interface IProps{
    changeView: any;
}

const FirstTopBar = (prop: IProps) => {
    return (
        <Container>
            <LSide>
                <span>Entities</span>
                <img src="icons/cog.svg" />
            </LSide>

            <RSide>
                <CustomButton onClick={()=>prop.changeView(1)}>
                    Mosaic
                </CustomButton>

                <CustomButton onClick={()=>prop.changeView(2)}>
                    Row
                </CustomButton>
            </RSide>
        </Container>
    )
};

export default FirstTopBar;