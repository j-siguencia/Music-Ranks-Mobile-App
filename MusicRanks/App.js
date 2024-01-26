import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";


import RootStack from "./navigation/RootStack";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./components/CredentialsContext";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setstoredCredentials] = useState("");
  const checkLoginCredentials = () => {
    AsyncStorage.getItem("MusicRankCredentials")
      .then((result) => {
        if (result !== null) {
          setstoredCredentials(JSON.parse(result));
        } else {
          setstoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setstoredCredentials }}
    >
      <RootStack />
    </CredentialsContext.Provider>
  );
}
