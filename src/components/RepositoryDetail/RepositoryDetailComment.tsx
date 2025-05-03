import { View, StyleSheet } from "react-native"
import theme from "../../theme";
import RepositoryDetailRating from "./RepositoryDetailRating";
import { TReview } from "../../types";
import RepositoryDetailDescription from "./RepositoryDetailDescription";

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      paddingTop: theme.margins.top,
      paddingBottom: theme.margins.top,
      paddingLeft: theme.margins.centeredLeft,
      paddingRight: 100,
      flexDirection: 'row',
      gap: 20,
      alignItems: "flex-start"
  }
});

function RepositoryDetailComment({review}: RepositoryDetailCommentProps) {
  return (
    <View style={styles.container}>
      <RepositoryDetailRating rating={review.rating}/>
      <RepositoryDetailDescription review={review}/>
    </View>
  )
}

interface RepositoryDetailCommentProps {
  review: TReview
}

export default RepositoryDetailComment