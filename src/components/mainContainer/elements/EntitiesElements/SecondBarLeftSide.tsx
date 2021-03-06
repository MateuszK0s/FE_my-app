import { useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Layout } from "../../../../entities/Layout";
import useDefault from "../../../../features/hooks/useDefault";
import { changeLayout } from "../../../../features/layoutSlice";
import { Colors } from "../../../../styledHelpers/Colors";
import FilterMenu from "./EntityFilters/FilterMenu";
import FullScreenButton from "./EntityFilters/FullScreenButton";

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
    img{
        min-height: 10px;
        padding-left: 5px;
    }
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

const MenuWrapper = styled.div`
`;

const SecondBarLeftSide = () => {

    const dispatch = useDispatch();

    const copyLink = () => {
        const currentHref = window.location.href;
        navigator.clipboard.writeText(currentHref);
    }

    const [layout, setLayout] = useDefault();

    const handleFullScreen = (type: Layout) => {
        setLayout(type);
        console.log(type);
    }

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }

    return (
        <LeftSide>

            <MenuWrapper ref={wrapperRef}>
                <Ico1 onClick={menuHandler} >
                    <img src="/icons/circle.svg" />
                    <span>All</span>
                    <img src="/icons/arrow-down.svg" />
                </Ico1>
                {dropdownOpen && <FilterMenu />}
            </MenuWrapper>

            <Ico1 background-color="red">
                ?? ?? ??
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
                <FullScreenButton changeFullScreen={handleFullScreen} />
            </SideBorders2>

            <Share onClick={copyLink}>
                <img src="/icons/share.svg" />
                <span>Share</span>
            </Share>

        </LeftSide>
    )
};

export default SecondBarLeftSide;