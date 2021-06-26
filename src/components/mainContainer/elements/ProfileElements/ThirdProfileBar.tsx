import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    width: 100%;
    align-items: center;
    border-bottom: 1px solid ${Colors.ownlgray};
    font-size: 22px;
    min-height: 640px;
`;

const ContainerTitle = styled.div`
    width: 100%;
    margin: 20px 0;
    height: 40px;
    margin-left: 45px;
    span{
        margin: 0 15px;    
        color: ${Colors.owngray};
        font-weight: 600;
        font-size: 24px;
    }
`;

const RowBox = styled.div`
    width: 100%;
    height: 100px;
    margin: 12px 0;
    margin-left: 45px;
`;

const RowBox2 = styled.div`
    width: 100%;
    margin: 12px 0;
    height: 100px;
    margin-left: 45px;
    margin-top: 50px;

`;

const RowTitle = styled.div`
    height: 50%;
    width: 100%;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    span{
        margin: 15px;    
    }
`;

const RowTitle2 = styled.div`
    height: 50%;
    width: 100%;
    color: ${Colors.owngray};
    font-weight: 600;
    display: flex;
    align-items: center;
    span{
        margin: 15px;    
    }
`;

const RowBottom = styled.div`
    width: 100%;
    color: ${Colors.owngray};
    display: flex;
    align-items: center;
`;

const AttachmentRow = styled.div`
    color: ${Colors.owngray};
    align-items: center;
    height: 100%;
`;

const BottomRowItem = styled.div`
    font-weight: 600;
    color: ${Colors.owngray};
    margin: 0 10px;    
    padding: 4px 6px;
    width: 100%;
    height: 50%;
`;

const BottomRowItem2 = styled.div`
    color: ${Colors.owngray};
    margin: 5px 10px;    
    padding: 4px 6px;
    width: 100%;
    height: 25%;

`;

const Attachment = styled.div`
    background-color: #f4f5fa;
    display: flex;
    margin: 2.5px 10px;  
    padding: 10px 0;   
    width: Calc(100% - 100px);
    align-items: center;
    img{
        margin: 0 10px;
    }
`;

const Attachment2 = styled.div`
    background-color: #f4f5fa;
    display: flex;
    margin: 2.5px 10px;  
    padding: 10px 0;   
    width: Calc(100% - 100px);
    align-items: center;
    img{
        margin: 0 10px;
        max-width: 30px;
    }
`;

const AttLeftSide = styled.div`
    font-weight: 600;
    img{
        border-radius: 50%;
    }
`;

const AttRightSide = styled.div`
    margin-left: 150px;
    img{
        margin-left: 50px;
    }
`;

const Input = styled.input`
    border: none;
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    width: 100%;
    display: inherit;
    margin: inherit;  
    padding: inherit;   
    font-weight: inherit;
`;

const ThirdProfileBar = () => {
    return (
        <Container>
            <ContainerTitle>
                <span>Panel informations</span>
            </ContainerTitle>

            <RowBox>
                <RowTitle>
                    <span>Hourly fee</span>
                </RowTitle>
                <RowBottom>
                    <BottomRowItem><Input defaultValue="610€/hour (Negociated)" /></BottomRowItem>
                </RowBottom>
            </RowBox>

            <RowBox>
                <RowTitle>
                    <span>Terms & conditions</span>
                </RowTitle>
                <AttachmentRow>
                    <BottomRowItem2><Input defaultValue="Monthly 10k€ retainer - see with Jeanny Smith" /></BottomRowItem2>
                    <Attachment>
                        <img src="icons/attachment.svg" />
                        <Input defaultValue="Attachment_lorem-ipsum25425.jpg" />
                    </Attachment>
                </AttachmentRow>
            </RowBox>

            <RowBox2>
                <RowTitle2>
                    <span>Services & project</span>
                </RowTitle2>
                <RowBottom>
                    <BottomRowItem2><Input defaultValue="Corporate M&A and international acquisitions" /></BottomRowItem2>
                </RowBottom>
            </RowBox2>

            <RowBox>
                <RowTitle2>
                    <span>Terms & conditions</span>
                </RowTitle2>
                <AttachmentRow>
                    <Attachment2>
                        <AttLeftSide>
                        <img src="icons/indeks.jpg" />
                        Firstname Lastname
                        </AttLeftSide>
                        <AttRightSide>
                        <img src="icons/chat.svg" />
                        Message
                        <img src="icons/people.png" />
                        Profile
                        </AttRightSide>
                    </Attachment2>

                    <Attachment2>
                    <AttLeftSide>
                        <img src="icons/indeks.jpg" />
                        Firstname Lastname
                        </AttLeftSide>
                        <AttRightSide>
                        <img src="icons/chat.svg" />
                        Message
                        <img src="icons/people.png" />
                        Profile
                        </AttRightSide>
                    </Attachment2>
                </AttachmentRow>
            </RowBox>

        </Container>
    )
}

export default ThirdProfileBar;