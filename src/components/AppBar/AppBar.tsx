import Constants from "expo-constants";
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from "../../theme";
import AppBarLink from "./AppBarLink";
import useAuthStatus from "../../hooks/useAuthStatus";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgHeader,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 50,
    paddingHorizontal: theme.margins.centeredLeft
  }
});

function AppBar() {
  const authenticated = useAuthStatus();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarLink label="Repositories" path="/" />
        {authenticated && <AppBarLink label="Create a review" path="/review"/>}
        {authenticated 
          ? <AppBarLink label="Sign out" path="/sign_out" />
          : <AppBarLink label="Sign in" path="/sign_in" />
        }
        {!authenticated && <AppBarLink label="Sign up" path="/sign_up"/>}
      </ScrollView>
    </View>
  )
}

export default AppBar;