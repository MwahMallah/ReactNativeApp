import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import useRepository from '../../hooks/useRepository';
import Text from '../common/Text';
import TRepositoryList from '../../types';
import ItemSeparator from '../common/ItemSeparator';
import RepositoryListOrderPicker from './RepositoryListHeader/RepositoryListOrderPicker';
import RepositoryListHeader from './RepositoryListHeader/RepositoryListHeader';
import { useCallback, useMemo } from 'react';

export default function RepositoryList() {
  const { repositories, loading, navigateToRepository, 
    order, setOrder, searchKeyword, setSearchKeyword, fetchMore } 
    = useRepository({first: 3});

  const renderHeader = useCallback(() => (
    <RepositoryListHeader
      order={order}
      setOrder={setOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  ), [order, setOrder, searchKeyword, setSearchKeyword]);

  if (loading) {
    return <Text>Loading...</Text>
  }

  function onPress(repository: TRepositoryList) {
    navigateToRepository(repository);
  }

  function onEndReached() {
    fetchMore();
  }

  return (
    <FlatList 
      data={repositories} 
      renderItem={data => 
        <Pressable onPress={() => onPress(data.item)}>
          <RepositoryItem repository={data.item}/> 
        </Pressable>
      } 
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={renderHeader}
      onEndReached={onEndReached}
    />
  )
}
