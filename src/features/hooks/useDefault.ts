import { useDispatch, useStore } from "react-redux";
import { toggleDefault } from "../layoutSlice";

function useDefault(): [boolean, (toggle: boolean) => void] {
    const dispatch = useDispatch();

    const value = useStore().getState().layout.Default;

    const toggle = (toggle: boolean) => {
        dispatch(toggleDefault(toggle));
    }

    return [value, toggle];
}

export default useDefault;