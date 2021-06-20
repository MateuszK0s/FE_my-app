import { useStore } from "react-redux";
import IPhotos from "../../entities/IPhotos";

function usePhotos(): [IPhotos] {
    const state = useStore().getState();

    return state.photos.entities;
}

export default usePhotos;