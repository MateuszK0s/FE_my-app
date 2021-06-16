import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    border-radius: 1.9%;
    box-shadow: 10px 10px 10px #ECECEC;
    height: 350px;
    width: 100%;
    background-color: white;
`;

const TopBox = styled.div`
    width: 100%;
    height: 56%;
    overflow: hidden;
    img{
        width:100%;
        margin-top: -120px;    
    }
`;

const BottomBox = styled.div`
    width: 100%;
    height: 44%;
    display: flex;
    flex-direction: row;
`;

const BottomLeft = styled.div`
    height: 100%;
    display: flex;
    width: 140px;
    align-items: center;
    img{
        width: 55%;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
`;

const BottomRight = styled.div`
    height: 100%;
    width: Calc(100% - 140px);
    padding-right: 20px;
`;

const Title = styled.div`
    height: 40%;
    width: 100%;
    font-size: 26px;
    color: ${Colors.owngray};
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const Description = styled.div`
    height: 60%;
    color: ${Colors.owngray};
    width: 100%;
`;

const MainWorkspace = () => {
    return(
        <Container>
                <TopBox>
                    <img src="/images/tworkspace2.jpg"/>
                </TopBox>
                <BottomBox>
                    <BottomLeft>
                        <img src="/icons/entities2.svg"/>
                    </BottomLeft>
                    <BottomRight>
                        <Title>Corporate holdings</Title>
                        <Description>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory. Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory. Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</Description>
                    </BottomRight>
                </BottomBox>
        </Container>
    )  
}

export default MainWorkspace;
