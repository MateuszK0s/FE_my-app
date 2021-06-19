import { useStore } from "react-redux";
import IUser from "../../entities/IUser";

function useUsers(): [IUser] {
    const state = useStore().getState();

    return state.users.entities;
}

export default useUsers;