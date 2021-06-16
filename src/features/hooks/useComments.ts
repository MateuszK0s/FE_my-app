import { useStore } from "react-redux";
import IComments from "../../entities/IComments";

function useComments(): IComments [] {
    const state = useStore().getState();

    return state.comments;
}

export default useComments;