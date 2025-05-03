import { ApolloError, FetchResult, MutationResult, useApolloClient, useMutation } from "@apollo/client";
import { TAuthenticateInput, TAuthenticateResponse, TSignIn } from "../types";
import { AUTHENTICATE } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";
import { useNavigate } from "react-router-native";

export default function useSignIn(): [SignInFunction, MutationResult<TAuthenticateResponse>]  {
    const [signInMutation, result] = useMutation
        <TAuthenticateResponse, TAuthenticateInput>(AUTHENTICATE);

    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const signIn = async ({ username, password }: TSignIn) => {
        try {
            const res = await signInMutation({variables: {
                credentials: {
                    password,
                    username
                }
            }});

            const accessToken = res.data?.authenticate.accessToken;
            if (accessToken === undefined)
                return res;
    
            await authStorage.setAccessToken(accessToken);
            await apolloClient.resetStore();
    
            navigate("/");
            return res;
        } catch (e) {
            if (e instanceof ApolloError) {
                console.log(e.message);
            }

            return {};
        }
    }

    return [signIn, result]
}

type SignInFunction = ({ username, password }: TSignIn) => Promise<FetchResult<TAuthenticateResponse>>;