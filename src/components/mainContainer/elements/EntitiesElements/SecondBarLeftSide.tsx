import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import FullScreenButton from "./EntityFilters/FullScreen";

const LeftSide = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    height: 100%;
    span{
        margin-left: 10px;
    }
`;

const SideBorders = styled.div`
    border-left: 1px solid ${Colors.ownlgray};
    border-right: 1px solid ${Colors.ownlgray};
    height: 70%;
`;

const SideBorders2 = styled.div`
    border-right: 1px solid ${Colors.ownlgray};
    height: 70%;
`;

const Ico1 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    background-color: white;
    font-weight: 700;
`;

const Ico2 = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    height: calc(100% - 10px);
    margin: 0px 5px;
    img{
        max-width: 20px;
        max-height: 20px;
    }
`;

const Share = styled.div`
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

const SecondBarLeftSide = () => {

    const copyLink = () => {
        const currentHref = window.location.href;
        navigator.clipboard.writeText(currentHref);
        
    }
    
    return (
        <LeftSide>

            <Ico1 background-color="red">
                <img src="/icons/circle.svg" />
                <span>All</span>
            </Ico1>

            <Ico1 background-color="red">
                · · ·
            </Ico1>

            <SideBorders>
                <Ico2>
                    <img src="/icons/sort.svg" />
                    <span>Sort</span>
                </Ico2>
                <Ico2>
                    <img src="/icons/filter.svg" />
                    <span>Filters</span>
                </Ico2>
            </SideBorders>

            <SideBorders2>
                <FullScreenButton/>                    
            </SideBorders2>

            <Share onClick={copyLink}>
                <img src="/icons/share.svg" />
                <span>Share</span>
            </Share>

        </LeftSide>
    )
};

export default SecondBarLeftSide;