import React from 'react'
import Text from '../common/Text'
import { Link, useLocation } from 'react-router-native'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center', 
		height: 90
	}
});

function AppBarLink({ label, path }:AppBarLinkProps) {
	const {pathname: currentLocation } = useLocation();
	const textColor = currentLocation === path ? 'header' : 'textSecondary';

  return (
		<Link to={path} style={styles.container}>
			<Text color={textColor} fontSize='subheading' fontWeight="bold">
				{label}
			</Text>
		</Link>
  )
}

interface AppBarLinkProps {
  label: string,
	path: string
};

export default AppBarLink