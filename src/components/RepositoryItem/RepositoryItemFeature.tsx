import { View, StyleSheet } from "react-native"
import Text from "../common/Text"

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	}
});

function RepositoryItemFeature({ label, result }: RepositoryItemFeatureProps) {
  return (
    <View style={styles.container}>
			<Text fontWeight="bold">{formatNumber(result)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}

interface RepositoryItemFeatureProps {
	result: number,
	label: string,
};


function formatNumber(num: number) {
	if (num < 1000) return num.toString();

	const formattedNumber = (num / 1000).toFixed(1);
	return formattedNumber + "k";
}

export default RepositoryItemFeature