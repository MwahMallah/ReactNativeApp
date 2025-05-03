import theme from "../../theme";
import { View, StyleSheet, Pressable  } from "react-native"
import Text from "../common/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignIn, signInSchema } from "../../types";
import TextInput from "../common/TextInput";
import useSignIn from "../../hooks/useSignIn";

function SignIn() {
  const {control, handleSubmit, formState: {errors}, getValues} = useForm<TSignIn>({
    resolver: zodResolver(signInSchema)
  });

  const [signIn, result] = useSignIn();

  async function onSubmit(e: TSignIn) {
    const credentials = getValues();
    await signIn(credentials);
  }

  return (
    <View style={styles.container}>
      {result.error && <Text style={styles.error}>{result.error.message}</Text>}

      <TextInput control={control} name="username" error={errors.username} placeholder="username"/>
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

      <TextInput control={control} name="password" secureTextEntry error={errors.password} placeholder="password"/>
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Sign in</Text>
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

export default SignIn