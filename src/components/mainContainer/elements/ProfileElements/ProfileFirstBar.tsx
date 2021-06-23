import styled from 'styled-components';

const Container = styled.div`
    height: 70px;
    width: 73%;
    display: inline-flex;
    align-items: center;
    padding-left: 27%;
`;

const InfoBox = styled.div`
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    img{
        margin: 0 10px;
    }
    margin-left: 20px;
`;

const InfoBoxX = styled.div`
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    img{
        margin-left: 30px;
    }
    margin-left: 20px;
`;

const ProfileFirstBar = () => {
    return (
        <Container>
            <InfoBox>
                <img src="/icons/chat.svg"/>
                Message
            </InfoBox>

            <InfoBox>
                <img src="/icons/request.svg"/>
                Create a request
            </InfoBox>

            <InfoBox>
                <img src="/icons/case.svg"/>
                Add a cluster
            </InfoBox>

            <InfoBoxX>
                <img src="/icons/x.svg"/>
            </InfoBoxX>
            
        </Container>
    )
}

export default ProfileFirstBar;
