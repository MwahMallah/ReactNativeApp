import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList/RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar/AppBar";
import theme from "../theme";
import { Routes, Route, Navigate } from "react-router-native";
import SignOut from "./SignOut/SignOut";
import RepositoryDetail from "./RepositoryDetail/RepositoryDetail";
import Review from "./Review/Review";
import SignUp from "./SignUp/SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bgMain
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}/>
        <Route path="/sign_in" element={<SignIn />}/>
        <Route path="sign_out" element={<SignOut />}/>
        <Route path="review" element={<Review />}/>
        <Route path="/repository/:id" element={<RepositoryDetail />}/>
        <Route path="/sign_up" element={<SignUp />}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </View>
  );
};

export default Main;
