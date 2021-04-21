import { FC } from "react";
import styled from "styled-components";

type IconName = "administration" | "arrow-down" | "bell" | "cog" | "comments" |
"ecosystem" | "entities" | "entities2" | "house" | "house2" | "logo" |
"logout" | "network" | "people" | "atom" | "plus" | "privacy" | "publications" | "search" |
"settings" | "user-plus";

const Container = styled.div`

`;

interface IProps{
    icon: IconName,
    width?: string,
    height?: string,
}

const Icon: FC<IProps> = ({icon, width, height}) => {
    return (
        <Container>
            <img src={`/icons/${icon}.png`} width={width} height={height}/>
        </Container>
    )
}

export default Icon;
