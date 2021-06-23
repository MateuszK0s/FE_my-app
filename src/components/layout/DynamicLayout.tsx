import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../entities/Layout";
import useDefault from "../../features/hooks/useDefault";
import FullScreenLayout from "./FullScreenLayout";
import MainLayout from "./MainLayout";

interface IProps {
    children: JSX.Element;
}

const DynamicLayout = ({ children }: IProps) => {
    const [currentLayout] = useDefault();

    console.log("ssa",currentLayout);

    switch (currentLayout) {
        case Layout.FULL_SCREEN: return <FullScreenLayout>{children}</FullScreenLayout>
        default:
            return <MainLayout>{children}</MainLayout>
    }
} 

export default DynamicLayout;