import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 200px;
    width: 100%;
    display: inline-flex;
    align-items: center;
    border-bottom: 1px solid ${Colors.ownlgray};
`;

const LeftSide = styled.div`
    height: 100%;
    width: 200px;
`;

const MiddleSide = styled.div`
    height: 100%;
    width: 30%;
`;

const RightSide = styled.div`
    height: 100%;
    width: Calc(70% - 200px);
`;

const LeftTop = styled.div`
    height: 68%;
    width: 100%;
    display: flex;
    align-items: center;
    img{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const LeftBottom = styled.div`
    height: 32%;
    width: 100%;
    background-color: white;
    display: flex;
    span{
        color: ${Colors.ownlblue};
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
    }
`;

const MiddleTop = styled.div`
    height: 30%;
    font-size: 24px;
    span{
        text-align: center;
    }
    margin-top: 10%;
`;

const MiddleBottom = styled.div`
    margin-top: 5%;
    font-size: 22px;
`;

const RightTop = styled.div`
    height: 50%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: end;
    img{
        margin-right: 20px;
    }
`;

const RightBottom = styled.div`
    height: 50%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: end;
    span{
        margin-right: 20px;
    }
    color: ${Colors.owngray};
    font-size: 22px;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.ownlblue};
`;

const MainProfileBar = () => {
    return (
        <Container>
            <LeftSide>
                <LeftTop>
                    <img src="/icons/indeks.jpg" />
                </LeftTop>

                <LeftBottom>
                    <span><CustomLink to="/profile">See profile</CustomLink></span>
                </LeftBottom>
            </LeftSide>

            <MiddleSide>
                <MiddleTop>
                    <span>
                        Humberta Swift<br />
                        Clifford Chance
                    </span>
                </MiddleTop>

                <MiddleBottom>
                    <span>
                        New-york<br />
                        Partner
                    </span>
                </MiddleBottom>
            </MiddleSide>

            <RightSide>
                <RightTop>
                    <img src="/icons/pen.svg" />
                </RightTop>

                <RightBottom>
                    <span>
                        humbertaswift@gmail.com<br />
                        +33 (0)6 12 34 56 78
                    </span>
                </RightBottom>
            </RightSide>

        </Container>
    )
}

export default MainProfileBar;
