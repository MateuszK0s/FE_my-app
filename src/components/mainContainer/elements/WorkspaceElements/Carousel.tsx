import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import WorkspaceBox from "./WorkspaceBox";
import { useSelector } from "react-redux";
import { IWorkspace } from "../../../../entities/IWorkspace";
import { Link } from "react-router-dom";
import { useWorkspaces } from "../../../../features/useWorskapces";
import { useEffect, useState } from "react";

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CustomCarousel = styled(Carousel)`
.BrainhubCarousel__track {
        
    }
`;

const WorkspaceLink = styled(Link)`
    text-decoration: none;
`;

const Workspaces = () => {

    const items = useWorkspaces();

    return (
        <ItemsContainer>
                <CustomCarousel itemWidth={350} offset={16} plugins={[{
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 5,
                }
            }]}>
                {
                    items.map((workspace => <WorkspaceBox Workspace={workspace}/>))
                }
            </CustomCarousel>
        </ItemsContainer>
    );
}

export default Workspaces;

