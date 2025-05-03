import { View, StyleSheet, Text } from "react-native";
import TRepositoryList from "../../types";
import RepositoryItemFeature from "./RepositoryItemFeature";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});

function RepositoryItemFeatureList(
    {repository }: RepositoryItemFeatureListProps
) {
  return (
    <View style={styles.container}>
      <RepositoryItemFeature label='Stars' result={repository.stargazersCount}/>
      <RepositoryItemFeature label="Forks" result={repository.forksCount}/>
      <RepositoryItemFeature label="Reviews" result={repository.reviewCount}/>
      <RepositoryItemFeature label="Rating" result={repository.ratingAverage}/>
    </View>
  )
}

interface RepositoryItemFeatureListProps {
  repository: TRepositoryList
};

export default RepositoryItemFeatureList