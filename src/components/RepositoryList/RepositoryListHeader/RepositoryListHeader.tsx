import React from 'react'
import { View, StyleSheet } from 'react-native'
import RepositoryListOrderPicker from './RepositoryListOrderPicker'
import { repositoryOrder } from '../../../types'
import RepositoryListSearchBar from './RepositoryListSearchBar'
import theme from '../../../theme'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: theme.margins.centeredLeft
  }
});

function RepositoryListHeader({order, setOrder, searchKeyword, setSearchKeyword}
    : RepositoryListHeaderProps) {
  return (
    <View style={styles.container}>
      <RepositoryListSearchBar 
        searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
      <RepositoryListOrderPicker
        order={order} setOrder={setOrder} />
    </View>
  )
}

interface RepositoryListHeaderProps {
  order: repositoryOrder;
  setOrder: (newOrder: repositoryOrder) => void;
  searchKeyword: string;
  setSearchKeyword: (newKeyword: string) => void;
};

export default RepositoryListHeader