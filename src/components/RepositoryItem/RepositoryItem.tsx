import { View, StyleSheet } from "react-native";
import TRepositoryList from "../../types";
import theme from "../../theme";

import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemFeatureList from "./RepositoryItemFeatureList";
import { ReactNode } from "react";

const styles = StyleSheet.create({
  repoCard: {
    backgroundColor: 'white',
    paddingTop: theme.margins.top,
    paddingBottom: theme.margins.top,
    gap: 20
  }
});

export default function RepositoryItem({repository, children}: RepositoryItemProps) {
  return (
    <View style={styles.repoCard}>
      <RepositoryItemHeader repository={repository}/>
      <RepositoryItemFeatureList repository={repository}/>
      {children}
    </View>
  )
}

interface RepositoryItemProps {
  repository: TRepositoryList;
  children?: ReactNode;
};