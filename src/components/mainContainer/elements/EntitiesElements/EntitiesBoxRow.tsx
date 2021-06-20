import styled from 'styled-components';
import usePhotos from '../../../../features/hooks/usePhotos';
import EntitiesElementRow from './EntitiesElementRow';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
`;

const EntitiesBoxRow = () => {

    const photos = usePhotos();
    const slicedPhotos = Object.values(photos).slice(0, 24);


    return (
        <Container>

            {
            Object.values(slicedPhotos).map((_photos) =>
            <EntitiesElementRow photos={(_photos)} />
            )}

        </Container>
    )
};

export default EntitiesBoxRow;