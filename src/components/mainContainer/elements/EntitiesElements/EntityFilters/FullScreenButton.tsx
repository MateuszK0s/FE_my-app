import styled from "styled-components";
import { Layout } from "../../../../../entities/Layout";
import useDefault from "../../../../../features/hooks/useDefault";

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

interface IProps{
    changeFullScreen: any;
}

const FullScreenButton = (prop: IProps) => {

    const [layoutCheck] = useDefault();
    const layoutToSet = Layout.FULL_SCREEN;
    // layoutCheck == Layout.FULL_SCREEN ? Layout.DEFAULT : Layout.FULL_SCREEN;

    return (
        <Container onClick={() => prop.changeFullScreen(layoutToSet)}>
            <img src="/icons/fullscreen.svg" />
        </Container>
    )
}

export default FullScreenButton;