import styled from "styled-components";

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    height: calc(100% - 10px);
    margin: 0px 5px;
    img{
        max-width: 20px;
        max-height: 20px;
    }
    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`;

const FullScreenButton = () => {

    const handleFullScreen = () =>{
        
    }

    return (
        <Container onClick={() => handleFullScreen()}>
            <img src="/icons/fullscreen.svg" />
        </Container>
    )
}

export default FullScreenButton;