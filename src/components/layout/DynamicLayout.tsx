import { useSelector } from "react-redux";
import { Layout } from "../../entities/Layout";
import FullScreenLayout from "./FullScreenLayout";
import MainLayout from "./MainLayout";

interface IProps {
    children: JSX.Element;
}

const DynamicLayout = ({ children }: IProps) => {
      const currentLayout = useSelector((state: any) => state.layout);
    return <MainLayout>{children}</MainLayout>
    
    switch (currentLayout) {
        case Layout.FULL_SCREEN: return <FullScreenLayout>{children}</FullScreenLayout>
        default:
            return <FullScreenLayout>{children}</FullScreenLayout>
    }
}

export default DynamicLayout;