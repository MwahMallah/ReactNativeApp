import { ApolloError, useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutation";
import { TSignUp, TSignUpInput, TSignUpResponse } from "../types";
import useSignIn from "./useSignIn";

export default function useSignUp() {
  const [registerMutation, result] = useMutation
    <TSignUpResponse, TSignUpInput>(REGISTER);
  
  const [signIn] = useSignIn();

  async function signUp(credentials: TSignUp) {
    try {
      await registerMutation({
        variables: {user: {
          password: credentials.password,
          username: credentials.username
        }}
      })

      await signIn(credentials);
    } catch(e) {
      if (e instanceof ApolloError)
        console.log(e);
    }
  }

  return {signUp, result};
}