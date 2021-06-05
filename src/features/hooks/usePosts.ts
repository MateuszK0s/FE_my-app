import { useStore } from "react-redux";
import IPost from "../../entities/IPost";

function usePosts(): [IPost] {
    const state = useStore().getState();

    return state.posts;
}

export default usePosts;