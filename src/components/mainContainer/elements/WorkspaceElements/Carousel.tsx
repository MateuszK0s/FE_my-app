import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import WorkspaceBox from "./WorkspaceBox";
import { useSelector } from "react-redux";
import { IWorkspace } from "../../../../entities/IWorkspace";
import { Link } from "react-router-dom";

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

function Workspaces() {

    // let items = useSelector(state.workspaces);
    // if (items == null) {
    //     items = [];
    // }

    // const itemsCount = items.length;

    // if (itemsCount === 0) {
    //     return null;
    // }

    return (
        <ItemsContainer>
            <CustomCarousel itemWidth={350} offset={16} plugins={[{
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 5,
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

// {
//    items.map((item: IWorkspace, index) => (
//        <WorkspaceLink key={index} to={`/workspace/${item.id}`}>
//            <WorkspaceItem workspace={item} />
//        </WorkspaceLink>
//    ))
// }