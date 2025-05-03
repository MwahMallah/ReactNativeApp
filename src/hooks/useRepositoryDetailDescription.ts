import { TReview } from "../types";
import { format } from "date-fns";

export default function useRepositoryDetailDescription(review: TReview) {
  return format(new Date(review.createdAt), 'yyyy.MM.dd');
}