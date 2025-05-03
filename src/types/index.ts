import {z} from "zod";

export default interface TRepositoryList {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
};

export interface TReview {
    rating: number;
    text: string;
    createdAt: string;
    id: string;
    user: {
        username: string;
        id: string;
    }
};

export interface TRepositoryDetail extends TRepositoryList {
    url: string;
    reviews: {
        edges: {node: TReview}[]
    }
};

export interface TGetRepositoryResponse {
    repository: TRepositoryDetail;
};

export interface TGetRepositoryInput {
    repositoryId: string;
}

export const signInSchema = z.object({
    username: z.string().min(5),
    password: z.string().min(5),
});

interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
}

export interface GetRepositoriesGraphql {
    repositories: {
        edges: {
            node: TRepositoryList;
            cursor: string;
        }[],
        
        pageInfo: PageInfo
    }
}

export interface GetRepositoryVariables {
    orderBy: string;
    orderDirection: string;
    searchKeyword: string;
    first: number;
    after?: string;
};

export type TSignIn = z.infer<typeof signInSchema>;

export interface TAuthenticateInput {
    credentials: TSignIn
}

export type TAuthenticateResponse = {
    authenticate: {
        accessToken: string
    }
}

export const createReviewSchema = z.object({
    ownerName: z.string().min(1, "Repository owner name is required"),
    repositoryName: z.string().min(1, "Repository name is required"),
    rating: z.coerce.number().min(1).max(100),
    text: z.string().optional()
});

export type TCreateReview = z.infer<typeof createReviewSchema>;

export type TCreateReviewResponse = { 
    createReview: { 
        repositoryId: string
    } 
};

export type TCreateReviewInput = {
    review: TCreateReview
};

export const signUpSchema = z.object({
    password: z.string().min(5, {message: "Minimum 5 characters"}).max(30, {message: "Maximum 30 characters"}),
    username: z.string().min(5, {message: "Minimum 5 characters"}).max(30, {message: "Maximum 30 characters"}),
    passwordConfirm: z.string().min(1, {message: "Confirm password"})
})
.superRefine((val, ctx) => {
    if (val.password !== val.passwordConfirm) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["passwordConfirm"],
            message: "Passwords should be equal"
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["password"],
            message: "Passwords should be equal"
        });
    }
});

export type TSignUp = z.infer<typeof signUpSchema>;

export type TSignUpInput = {
    user: {
        password: string;
        username: string;
    }
};

export type TSignUpResponse = {

};

export type repositoryOrder = "latest" | "highestRated" | "lowestRated";