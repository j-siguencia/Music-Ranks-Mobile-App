import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CredentialsContext } from "../components/CredentialsContext";

//screens
import Login from "./../screens/Login";
import Welcome from "./../screens/Home";
import SignUp from "./../screens/SignUp";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {storedCredentials ? (
              <Stack.Screen name="Welcome" component={Welcome} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
