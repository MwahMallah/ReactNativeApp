import React from 'react'
import { View } from 'react-native'
import Text from '../common/Text'
import { TReview } from '../../types'
import useRepositoryDetailDescription from '../../hooks/useRepositoryDetailDescription'

function RepositoryDetailDescription({review}: RepositoryDetailDescriptionProps) {
  const createdAt = useRepositoryDetailDescription(review);
  
  return (
    <View>
      <Text fontWeight='bold'>{review.user.username}</Text>
      <Text color='textSecondary'>{createdAt}</Text>
      <Text>{review.text}</Text>
    </View>
  )
}

interface RepositoryDetailDescriptionProps {
  review: TReview;
};

export default RepositoryDetailDescription