import styled from 'styled-components';
import IPhotos from '../../../../entities/IPhotos';
import { Colors } from '../../../../styledHelpers/Colors';

const Container = styled.div`
    height: 150px;
    width: 100%;
    margin: 1%;
    display: flex;
    font-size: 14px;
    border-radius: 1.5%;
    background-color: white;
    box-shadow: 10px 10px 10px#ECECEC;
`;

const LeftSide = styled.div`
    width: 150px;
    height: 100%;
`;

const RightSide = styled.div`
    width: calc(100% - 150px);
    height: 100%;
`;

const TitleBox = styled.div`
    height: 70%;
    margin: 5px 5px; 
    color: ${Colors.ownblue};
    font-size: 17px;
    font-weight: 600;
`;

const DescriptionBox = styled.div`
    height: 30%;
    margin: 5px 5px; 
`;

interface IEntities {
    photos?: IPhotos | null;
}

function EntitiesElementRow(props: IEntities) {
    return (
        <Container>
            <LeftSide>
                <img src={props.photos?.thumbnailUrl}/>
            </LeftSide>

            <RightSide>
                <TitleBox>
                    {props.photos?.title}
                </TitleBox>

                <DescriptionBox>
                    Caracas 1050, Distrito Capital, Venezuela
                </DescriptionBox>
            </RightSide>

        </Container>
    )
};

export default EntitiesElementRow;