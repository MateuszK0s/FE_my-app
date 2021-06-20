import { useState } from 'react';
import styled from 'styled-components';
import DynamicLayout from '../layout/DynamicLayout';
import EntitiesBoxMosaic from './elements/EntitiesElements/EntitiesBoxMosaic';
import EntitiesBoxRow from './elements/EntitiesElements/EntitiesBoxRow';
import FirstTopBar from './elements/EntitiesElements/FirstTopBar';
import SecondTopBar from './elements/EntitiesElements/SecondTopBar';


const Container = styled.div`
    margin-top: 30px;
    margin-right: 60px;
    margin-left: 30px;
    height: 100%;
    min-height: 1550px;
    width: 100%;
    background-color:white;
    border-radius: 1.5%;
    box-shadow: 10px 10px 10px #ECECEC;
    margin-right: 60px;
`;

const EntitiesContainer = () => {

    const [type, setType] = useState(1);

    const handleView = (type: number) => {
        setType(type);
    }

    return (
        <DynamicLayout>
            <Container>

                <FirstTopBar changeView={handleView} />

                <SecondTopBar />

                {
                    type == 1 ? <EntitiesBoxMosaic /> : <EntitiesBoxRow />
                }

            </Container>
        </DynamicLayout>
    )
}

export default EntitiesContainer;
