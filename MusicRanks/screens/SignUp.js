import React, { useContext, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import {
  SignUpContainer,
  PageTitle,
  styles,
  LoginText,
  StyleButton,
  AppTitle,
  StyledButtonText,
} from "./../components/style.js";
import { Styles } from "../components/jstyle";

import { Formik } from "formik";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Octicons";

const SignUp = ({ navigation }) => {
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  const handleSignUp = async (values) => {
    try {
      const response = await axios.post(
        "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/user/create",
        {
          username: values.username,
          password: values.password,
          confirm_password: values.confirmPassword,
        }
      );
      if (response.data.success) {
        showToast("You have succesfully made your account!");
        navigation.navigate("Login");
      } else {
        showToast(response.data.error);
        console.log("test");
      }
    } catch (error) {
      showToast("error");
    }
  };

  return (
    <SignUpContainer>
      <AppTitle>Musical Ranks</AppTitle>
      <PageTitle> Sign Up</PageTitle>
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => {
          if (
            values.username == "" ||
            values.password == "" ||
            values.confirmPassword == "" ||
            values.password != values.confirmPassword
          ) {
            showToast("Please fill out all the fields.");
          } else if (values.password.length < 10) {
            showToast(
              "Make sure your password is at least 10 characters long!"
            );
          } else if (!/\d/.test(values.password)) {
            showToast("Make sure your password contains at least one number!");
          } else {
            handleSignUp(values);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <MytextInput
              label="Username"
              placeholder="Username"
              iconName="person"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <MytextInput
              label="Password"
              placeholder="Password"
              iconName="lock"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <MytextInput
              label="Confirm Password"
              placeholder="Confirm Password"
              iconName="lock"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            <Styles.StyledButton title="Sign Up" onPress={handleSubmit}>
              <Styles.ButtonText>Sign Up</Styles.ButtonText>
            </Styles.StyledButton>
          </View>
        )}
      </Formik>
      <Styles.TextLink onPress={() => navigation.navigate("Login")}>
        <Styles.SmallText>Already have an account? </Styles.SmallText>
        <Styles.TextLinkContents>Login</Styles.TextLinkContents>
      </Styles.TextLink>
    </SignUpContainer>
  );
};

const MytextInput = ({ label, iconName, ...props }, ref) => {
  return (
    <View>
      <Styles.LeftIcon>
        <Icon name={iconName} size={25} />
      </Styles.LeftIcon>
      <Styles.StyledInputLabel>{label}</Styles.StyledInputLabel>
      <Styles.StyledTextInput {...props} />
    </View>
  );
};
export default SignUp;
