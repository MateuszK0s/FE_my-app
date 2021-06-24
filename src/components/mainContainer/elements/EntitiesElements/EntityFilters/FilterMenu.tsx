import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../styledHelpers/Colors';

const Wrapper = styled.div`
    position: absolute;
    top: 203px;
    left: 441px;
    background-color: white;
    padding: 10px;
    border-radius: 2%;
    border: 1px solid ${Colors.ownlgray};  
    width: 900px;
    height: 250px;
`;

const Menu = styled.div`
    background: white;
    width: 100%;
    list-style-type: none;
    font-weight: 500;
    font-size: 20px;
`;

const TitleRow = styled.div`
    color: ${Colors.owngray};
    width: 100%;
    height: 30px;
`;

const BottomRow = styled.div`
    width: 100%;
    height: 40px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 7px;
    margin-top: 7px;
    margin-left: 10px;
    color: ${Colors.ownblue};
    font-weight: 600;
    img{
        min-height: 10px;
        padding-left: 5px;
    }
`;

const FilterRow = styled.div`
    width: 100%;
    height: 40px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 7px;
    margin-top: 7px;
    margin-left: 10px;
    img{
        min-height: 10px;
        padding-left: 5px;
    }
`;

const FilterElement = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 40px;
`;

const CInput = styled.input`
    background-color: ${Colors.ownlgray};
    border: 0px solid;
    padding: 5px;
    height: 28px;
    font-size: 18px;
    width: 140px;
    border-radius: 5px;
`;

export const FilterMenu: FC = () => {

    return (
        <Wrapper>
            <Menu>
                <TitleRow>Rows are filtered by the following conditions starting from the top</TitleRow>
                <FilterRow>
                    <FilterElement>
                        <img src="/icons/x.svg" /><span>Where</span>
                    </FilterElement>

                    <FilterElement>
                        <span>Company</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <span>Contains</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <CInput type="text" disabled value="Type..."/>
                    </FilterElement>
                </FilterRow>

                <FilterRow>
                    <FilterElement>
                        <img src="/icons/x.svg" /><span>Where</span>
                    </FilterElement>

                    <FilterElement>
                        <span>Status</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <span>Is</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <CInput type="text" disabled value="Type..."/>
                    </FilterElement>

                    <FilterElement>
                        <span>In</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <CInput type="text" disabled value="Entity..."/>
                    </FilterElement>
                </FilterRow>

                <FilterRow>
                    <FilterElement>
                        <img src="/icons/x.svg"/><span>And</span>
                    </FilterElement>

                    <FilterElement>
                        <span>Status</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <span>Ends before</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <CInput type="text" disabled value="Date..."/>
                    </FilterElement>

                    <FilterElement>
                        <span>In</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>

                    <FilterElement>
                        <CInput type="text" disabled value="Entity..."/>
                    </FilterElement>
                </FilterRow>

                <BottomRow>
                    <FilterElement>
                        <img src="/icons/plus.svg" height="25px" /><span>Add filter</span>
                    </FilterElement>

                    <FilterElement>
                        <span>choose property</span><img src="/icons/arrow-down.svg" />
                    </FilterElement>
                </BottomRow>
            </Menu>
        </Wrapper>
    );
};

export default FilterMenu;