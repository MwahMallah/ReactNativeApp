import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

export default function useSignOut() {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const signOut = async() => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        navigate("/");
    }

    return signOut;
}