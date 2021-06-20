import styled from 'styled-components';
import usePhotos from '../../../../../features/hooks/usePhotos';
import EntitiesElementMosaic from '../EntitiesElementMosaic';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
`;

const FullScrenMosaic = () => {

    const photos = usePhotos();
    const slicedPhotos = Object.values(photos).slice(0, 24);


    return (
        <Container>
                test
            {
            Object.values(slicedPhotos).map((_photos) =>
            <EntitiesElementMosaic photos={(_photos)} />
            )}

        </Container>
    )
};

export default FullScrenMosaic;