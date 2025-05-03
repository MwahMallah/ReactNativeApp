import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import TRepositoryList from "../../types";
import theme from '../../theme';
import Text from '../common/Text';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		columnGap: 10,
		paddingLeft: theme.margins.centeredLeft,
		paddingRight: theme.margins.centeredLeft,
	},
	image: {
		width: theme.image.size,
		height: theme.image.size,
		borderRadius: theme.image.borderRadius
	},
	language: {
		backgroundColor: theme.colors.bgLanguage,
		padding: 7,
		borderRadius: 5,
		alignSelf: 'flex-start' 
	},
	info: {
		rowGap: 5
	},
	description: {
		paddingRight: 60
	}
});

function RepositoryItemHeader({repository}: RepositoryItemHeaderProps) {
	return (
		<View style={styles.container}>
			<Image source={{uri: repository.ownerAvatarUrl}} style={styles.image} />
			<View style={styles.info}>
				<Text fontSize='subheading' fontWeight='bold'>{repository.fullName}</Text>
				<Text color='textSecondary' style={styles.description}>{repository.description}</Text>
				<Text color='header' style={styles.language}>{repository.language}</Text>
			</View>
		</View>
	)
}

interface RepositoryItemHeaderProps {
	repository: TRepositoryList
};


export default RepositoryItemHeader