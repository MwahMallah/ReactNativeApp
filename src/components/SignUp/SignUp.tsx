import { View, StyleSheet, Pressable } from 'react-native'
import theme from '../../theme';
import Text from '../common/Text';
import TextInput from '../common/TextInput';
import { useForm } from 'react-hook-form';
import { signUpSchema, TSignUp } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import useSignUp from '../../hooks/useSignUp';

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

function SignUp() {
  const { control, formState: { errors }, handleSubmit, getValues } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema)
  });

  const {result, signUp} = useSignUp();

  async function onSubmit() {
    const credentials = getValues();
    await signUp(credentials);
  }

  return (
    <View style={styles.container}>
      {/* {result.error && <Text style={styles.error}>{result.error.message}</Text>} */}

      <TextInput control={control} name="username" error={errors.username} placeholder='username'/>
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

      <TextInput control={control} name="password" secureTextEntry error={errors.password} placeholder='password'/>
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <TextInput control={control} name="passwordConfirm" secureTextEntry error={errors.passwordConfirm} placeholder='repeat password'/>
      {errors.passwordConfirm && <Text style={styles.error}>{errors.passwordConfirm.message}</Text>}

      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Sign up</Text>
      </Pressable>
    </View>
    )
}

export default SignUp