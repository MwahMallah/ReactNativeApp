import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { TGetRepositoryInput, TGetRepositoryResponse } from "../types";
import { GET_REPOSITORY } from "../graphql/query";
import * as Linking from 'expo-linking';

export default function useRepositoryDetail() {
	const { id } = useParams<{ id: string }>();
	if (id === undefined)
		throw new Error("Url param id is undefined");

	const { data, loading } = useQuery
		<TGetRepositoryResponse, TGetRepositoryInput>(GET_REPOSITORY, {
			fetchPolicy: "cache-and-network",
			variables: {
				repositoryId: id
			}
		});

	async function navigateToGithub() {
		if (!data)
			return;

		await Linking.openURL(data.repository.url);
	}

	return { data, loading, navigateToGithub };
}