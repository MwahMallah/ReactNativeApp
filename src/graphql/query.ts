import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query ExampleQuery($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
    edges {
      node {
        fullName
        id
        description
        forksCount
        language
        ownerAvatarUrl
        reviewCount
        ratingAverage
        stargazersCount
        url
      }
      cursor
    }

    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;

export const ME = gql`
{
  me {
    username
    id
  }
}
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      id
      description
      forksCount
      language
      ownerAvatarUrl
      reviewCount
      ratingAverage
      stargazersCount
      url
      reviews {
        edges  {
          node  {
            rating
            text
            createdAt
            id
            user {
              username
              id
            }
          }
        }
      }
    }
  }
`;