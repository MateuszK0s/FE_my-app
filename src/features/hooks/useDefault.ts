import { useDispatch, useStore } from "react-redux";
import { Layout } from "../../entities/Layout";
import { changeLayout } from "../layoutSlice";

function useDefault(): [Layout, (toggle: Layout) => void] {
    const dispatch = useDispatch();

    const value = useStore().getState().layout.layoutMode;

    const toggle = (toggle: Layout) => {
        dispatch(changeLayout(toggle));
    }

    return [value, toggle];
}

export default useDefault;