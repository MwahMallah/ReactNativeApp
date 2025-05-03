import { ApolloClient, InMemoryCache, createHttpLink, DefaultContext } from "@apollo/client";
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import AuthStorage from "./authStorage";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
    uri: Constants.expoConfig?.extra?.APOLLO_URI
});

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                repositories: relayStylePagination()
            }
        }
    }
})

export function createApolloClient(authStorage: AuthStorage) {
    const authLink = setContext(async (_, { headers }: DefaultContext) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}`: '',
                },
            };
        } catch(e) {
            console.log(e);
            return {headers,};
        }
    });
    
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache,
    })
}