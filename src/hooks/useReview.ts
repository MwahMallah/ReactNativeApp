import { ApolloError, MutationResult, useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutation";
import { TCreateReview, TCreateReviewInput, TCreateReviewResponse } from "../types";
import { useNavigate } from "react-router-native";

export default function useReview(): TUseReview {
  const navigate = useNavigate();
  const [createReviewMutation, result] = useMutation
    <TCreateReviewResponse, TCreateReviewInput>(CREATE_REVIEW);

  async function createReview(review: TCreateReview) {
    try {
        const {data, errors} = await createReviewMutation({
          variables: {
            review
          }
        });

        if (data === null || data === undefined) {
          console.log(errors);
        }
    
        navigate(`/repository/${data?.createReview.repositoryId}`);
    } catch(e) {
      if (e instanceof ApolloError) {
        console.log(e);
      }
    }
  }

  return [createReview, result];
}

type TUseReview = [(review: TCreateReview) => Promise<void>, MutationResult<TCreateReviewResponse>];