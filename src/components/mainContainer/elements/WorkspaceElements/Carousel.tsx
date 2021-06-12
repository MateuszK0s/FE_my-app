import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import WorkspaceBox from "./WorkspaceBox";

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CustomCarousel = styled(Carousel)`
.BrainhubCarousel__track {
        
    }
`;

function Workspaces() {
    const itemsCount = 5;

    return (
        <ItemsContainer>
            <CustomCarousel itemWidth={350} offset={16} plugins={[{
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: itemsCount
                }
            }]}>
                <WorkspaceBox/>
                <WorkspaceBox/>
                <WorkspaceBox/>
                <WorkspaceBox/>
                <WorkspaceBox/>
            </CustomCarousel>
        </ItemsContainer>
    );
}

export default Workspaces;