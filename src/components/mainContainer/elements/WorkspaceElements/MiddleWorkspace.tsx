import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 306px;
    width: 100%;
    margin-top: 30px;
`;

const TopBar = styled.div`
    height: 60px;
    width: 100%;
    color: ${Colors.owngray};
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const BottomContainer = styled.div`
    height: 220px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const MiddleBox = styled.div`
    border-radius: 1.9%;
    border: 1px solid #ECECEC;  
    box-shadow: 10px 10px 10px #ECECEC;
    background-color: white;
    width: 30%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 13px;
    img{
        opacity: 5%;
        height: 19%;
        position: absolute;
        margin-top: 20px;
        margin-left: 220px;
    }
`;

const BoxTop = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    img{
        margin-top: 0px;
        height: 80%;
        opacity: 100%;
        position: static;
        margin-left: 0px;
    }
`;

const BoxMiddle = styled.div`
    width: 100%;
    height: 20%;
    color: ${Colors.owngray};
    font-size: 23px;
    align-items: center;
    display: flexbox;
`;

const BoxBottom = styled.div`
    width: 100%;
    height: 50%;
    color: ${Colors.owngray};
    font-size: 18px;
`;

const MiddleWorkspace = () => {
    return (
        <Container>

            <TopBar>Start working on corporate matters</TopBar>

            <BottomContainer>

                <MiddleBox>
                    <img src="/icons/entities.svg" />
                    <BoxTop><img src="/icons/entities.svg" /></BoxTop>
                    <BoxMiddle>
                        Explore you <b>entities</b>
                    </BoxMiddle>
                    <BoxBottom>
                        Take a few minutes to look at the most important elements and specificities of your entities. Take a few minutes to look at the most important elements and specificities of your entities.
                    </BoxBottom>
                </MiddleBox>

                <MiddleBox>
                    <img src="/icons/ecosystem.svg" />
                    <BoxTop><img src="/icons/ecosystem.svg" /></BoxTop>
                    <BoxMiddle>
                        Structure the <b>ownership</b>
                    </BoxMiddle>
                    <BoxBottom>
                        Get a clear view of the ownership by looking at the relations between individuals and entities. Get a clear view of the ownership by looking at the relations between individuals and entities.
                    </BoxBottom>
                </MiddleBox>

                <MiddleBox>
                    <img src="/icons/settings.svg"/>
                    <BoxTop><img src="/icons/settings.svg" /></BoxTop>
                    <BoxMiddle>
                        Define the <b>calendar</b>
                    </BoxMiddle>
                    <BoxBottom>
                        Prepare future events by creating detailed plans around the life of your entity. Prepare future events by creating detailed plans around the life of your entity.
                    </BoxBottom>
                </MiddleBox>

            </BottomContainer>


        </Container>
    )
}

export default MiddleWorkspace;
