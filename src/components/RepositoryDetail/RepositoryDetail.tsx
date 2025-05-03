import { View, FlatList, StyleSheet } from 'react-native'
import useRepositoryDetail from '../../hooks/useRepositoryDetail'
import Text from '../common/Text'
import RepositoryDetailHeader from './RepositoryDetailHeader'
import ItemSeparator from '../common/ItemSeparator'
import RepositoryDetailComment from './RepositoryDetailComment'
import theme from '../../theme'

const styles = StyleSheet.create({
	header: {
		marginBottom: theme.margins.top
	}
});

function RepositoryDetail() {
	const {data, loading, navigateToGithub} = useRepositoryDetail();

	if (loading || !data?.repository)
		return <View><Text color='textSecondary' fontSize='subheading'>Loading...</Text></View>

  return (
		<FlatList 
			renderItem={({item}) => <RepositoryDetailComment review={item.node}/>} 
			data={data.repository.reviews.edges} 
			ListHeaderComponent={
				<RepositoryDetailHeader 
					data={data} 
					onPress={navigateToGithub}/>}
			ListHeaderComponentStyle={styles.header}
			ItemSeparatorComponent={ItemSeparator}
		/>
  )
}

export default RepositoryDetail