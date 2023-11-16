import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator, ToastAndroid } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../components/CredentialsContext";
import Icon from "react-native-vector-icons/Octicons";

import { Styles } from "../components/jstyle";

const Login = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const { storedCredentials, setstoredCredentials } =
    useContext(CredentialsContext);
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  //Handling the login process

  //If login is sucessfull then we want to navigate to the Welcome page

  const handleLogin = async (values, setSubmitting) => {
    try {
      const response = await axios.post(
        "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/user/login",
        {
          username: values.username,
          password: values.password,
        }
      );
      if (response.data.success) {
        const result = response.data;
        const { message, status, data } = result;
        username = values.username;

        showToast("You are Logged in!");
        persistLogin({ username }, message, status);
      } else {
        showToast(response.data.error);
      }
      setSubmitting(false);
    } catch (error) {
      showToast("error");
      setSubmitting(false);
    }
  };

  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem("MusicRankCredentials", JSON.stringify(credentials))
      .then(() => {
        console.log("everything is looking good!");
        setstoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Styles.StyledContainer>
      <StatusBar style="dark" />
      <Styles.InnerContainer>
        {/* <PageLogo resizeMode = "cover" source={require('./assets/adaptive-icon.png')} /> */}
        <Styles.PageTitle>Musical Ranks</Styles.PageTitle>

        <Styles.SubTitle>Account Login</Styles.SubTitle>

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            //make sure none of the fields are empty
            if (values.username == "" || values.password == "") {
              showToast("Please fill out all the fields.");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <Styles.StyledFormArea>
              <MytextInput
                label="Username"
                iconName="person"
                placeholder="Enter Username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("password")}
                value={values.username}
              />

              <MytextInput
                label="Password"
                iconName="lock"
                placeholder="Enter password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
              />

              {!isSubmitting && (
                <Styles.StyledButton onPress={handleSubmit}>
                  <Styles.ButtonText>Login</Styles.ButtonText>
                </Styles.StyledButton>
              )}

              {isSubmitting && (
                <Styles.StyledButton disabled={true}>
                  <ActivityIndicator size="large" color="#03b6fc" />
                </Styles.StyledButton>
              )}

              {/* change to actual sign up page in the future */}
              <Styles.TextLink onPress={() => navigation.navigate("SignUp")}>
                <Styles.SmallText>Don't have an account yet? </Styles.SmallText>
                <Styles.TextLinkContents>Sign Up</Styles.TextLinkContents>
              </Styles.TextLink>
            </Styles.StyledFormArea>
          )}
        </Formik>
      </Styles.InnerContainer>
    </Styles.StyledContainer>
  );
};

const MytextInput = ({ label, iconName, ...props }) => {
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
export default Login;
