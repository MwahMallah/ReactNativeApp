import React from 'react'
import { Searchbar } from 'react-native-paper';

function RepositoryListSearchBar({searchKeyword, setSearchKeyword}
  : RepositoryListSearchBarProps) {
  return (
    <Searchbar 
      value={searchKeyword} 
      onChangeText={setSearchKeyword} 
      placeholder='Search'/>
  )
}

interface RepositoryListSearchBarProps {
  searchKeyword: string;
  setSearchKeyword: (newKeyword: string) => void
};

export default RepositoryListSearchBar