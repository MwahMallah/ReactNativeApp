import { View, StyleSheet } from "react-native"
import Text from "../common/Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 10,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.primary
  }
});

function RepositoryDetailRating({ rating }: RepositoryDetailRatingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {rating}
      </Text>
    </View>
  )
}

interface RepositoryDetailRatingProps {
  rating: number;
}

export default RepositoryDetailRating