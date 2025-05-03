import AuthStorageContext from "../contexts/AuthStorageContext";
import { useContext } from "react";
import AuthStorage from "../utils/authStorage";

export default function useAuthStorage(): AuthStorage {
    const authStorage = useContext(AuthStorageContext);

    if (authStorage === undefined) {
        throw new Error("Auth storage is not set");
    }

    return authStorage;
}