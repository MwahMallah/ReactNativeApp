import React from 'react'
import { View, Pressable, StyleSheet, GestureResponderEvent } from 'react-native'
import Text from './Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.margins.centeredLeft,
    marginTop: theme.margins.top,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: theme.colors.textHeader,
  }
});

function Button({onPress, label}: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{label}</Text>
      </Pressable>
    </View>
  )
}

interface ButtonProps {
  onPress: (e: GestureResponderEvent) => void,
  label: string
};

export default Button