import styled from "styled-components";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/topbar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div>
      <TopBar />
      <Container>
        <SideBar />
        {children}
      </Container>
    </div>
  );
}

export default MainLayout;