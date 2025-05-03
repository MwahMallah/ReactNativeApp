import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation Authenticate($credentials: AuthenticateInput!) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`;

export const REGISTER = gql`
mutation Register($user: CreateUserInput) {
  createUser(user: $user) {
    username
    id
  }
}
`;

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput!) {
  createReview(review: $review) {
    repositoryId
  }
}
`;