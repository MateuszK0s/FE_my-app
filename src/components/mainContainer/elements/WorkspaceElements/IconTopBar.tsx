import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

const TopBar2 = styled.div`
    height: 76px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
    font-weight: 600;
`;

const Ico1 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: white;
    color: ${Colors.ownblue};
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico2 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #b1ebb1;
    color: green;
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico3 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #b0daee;
    color: #2340c2;
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico4 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #eedfb0;
    color: #c27d23;
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico5 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #f1cbcb;
    color: #f04242;
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico6 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #c2c2c2;
    color: ${Colors.owngray};
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const Ico7 = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px 9px;
    height: calc(100% - 10px);
    img{
        margin-right: 10px;
    }
    background-color: #dddddd;
    color: ${Colors.owngray};
    border-radius: 7%;
    box-shadow: 8px 8px 8px #ECECEC;
`;

const IconTopBar = () => {

    return (
        <TopBar2>
            <Ico1 background-color="red">
                <span>All</span>
            </Ico1>

            <Ico2>
                <img src="/icons/entities.svg" />
                <span>SAS</span>
            </Ico2>

            <Ico3>
                <img src="/icons/entities.svg" />
                <span>SARL</span>
            </Ico3>

            <Ico4>
                <img src="/icons/entities.svg" />
                <span>Secondary business</span>
            </Ico4>

            <Ico5>
                <img src="/icons/bell.svg" />
                <span>Communites</span>
            </Ico5>

            <Ico6>
                <img src="/icons/bell.svg" />
                <span>POA</span>
            </Ico6>

            <Ico7>
                <img src="/icons/bell.svg" />
                <span>Survey</span>
            </Ico7>

            <Ico1>
                <span>...</span>
            </Ico1>
        </TopBar2>
    )
}
export default IconTopBar;
