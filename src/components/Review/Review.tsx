import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import Text from '../common/Text'
import theme from '../../theme'
import TextInput from '../common/TextInput'
import { useForm } from 'react-hook-form'
import { createReviewSchema, TCreateReview } from '../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import useReview from '../../hooks/useReview'

function Review() {
  const [createReview, result] = useReview();
  const {handleSubmit, control, formState: {errors}} = useForm<TCreateReview>({
    resolver: zodResolver(createReviewSchema)
  });

  async function onSubmit(review: TCreateReview) {
    await createReview(review);
  }

  return (
    <View style={styles.container}>
      {result.error && <Text style={styles.error}>{result.error.message}</Text>}

      <TextInput 
        control={control} 
        name="ownerName" 
        placeholder='Owner name' 
        error={errors.ownerName} />
      {errors.ownerName && <Text style={styles.error}>{errors.ownerName.message}</Text>}

      <TextInput 
        control={control} 
        name="repositoryName" 
        placeholder='Repository name' 
        error={errors.repositoryName} />
      {errors.repositoryName && <Text style={styles.error}>{errors.repositoryName.message}</Text>}

      <TextInput 
        control={control} 
        name="rating" 
        placeholder='Rating between 0 and 100' 
        error={errors.rating} />
      {errors.rating && <Text style={styles.error}>{errors.rating.message}</Text>}

      <TextInput 
        control={control} 
        name="text" 
        placeholder='Review' 
        error={errors.text} 
        multiline/>
      {errors.text && <Text style={styles.error}>{errors.text.message}</Text>}

      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Create review</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginHorizontal: theme.margins.centeredLeft,
    marginTop: 20
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white'
  },
  error: {
    color: 'red'
  }
});

export default Review