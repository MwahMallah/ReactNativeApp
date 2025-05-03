import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/query";
import TRepositoryList, { GetRepositoriesGraphql, GetRepositoryVariables, repositoryOrder } from "../types";
import { useNavigate } from "react-router-native";
import { useState } from "react";

const orderVariableMapping: { 
		[order in repositoryOrder]
			: { orderBy: string; orderDirection: string;}
	} = {
	highestRated: {
		orderBy: "RATING_AVERAGE",
		orderDirection: "DESC"
	},
	lowestRated: {
		orderBy: "RATING_AVERAGE",
		orderDirection: "ASC"
	},
	latest: {
		orderBy: "CREATED_AT",
		orderDirection: "DESC"
	}
};

export default function useRepository({first}: useRepositoryProps) {
	const [order, setOrder] = useState<repositoryOrder>("latest");
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const { data, loading, fetchMore: handleFetchMore } = useQuery
		<GetRepositoriesGraphql, GetRepositoryVariables>(GET_REPOSITORIES, {
			variables: {
				...orderVariableMapping[order],
				searchKeyword,
				first
			}
		});

	const navigate = useNavigate();
	function navigateToRepository(repository: TRepositoryList) {
		navigate(`/repository/${repository.id}`);
	}

	function fetchMore() {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore)
			return; 

		handleFetchMore({
			variables: {
				...orderVariableMapping[order],
				after: data.repositories.pageInfo.endCursor,
				searchKeyword,
				first,
			}
		});
	}

	const repositories = data?.repositories.edges.map(e => e.node) || [];
	return {
			repositories, 
			loading, 
			navigateToRepository, 
			order, setOrder, 
			searchKeyword, setSearchKeyword,
			fetchMore };
}

interface useRepositoryProps {
	first: number;
};