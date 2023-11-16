import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Formik } from "formik";
import axios from "axios";

export default function CreateSong({ username }) {
  const [userRating, setUserRating] = useState(0);

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };
  return (
    <View style={styles.modalContainer}>
      <Formik
        initialValues={{ artist: "", song_name: "", rating: "" }}
        onSubmit={async (values) => {
          try {
            console.log(userRating);
            const SongData = {
              username: username,
              artist: values.artist,
              song: values.song_name,
              rating: userRating,
            };
            const response = await axios.post(
              "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/song/create",
              SongData
            );
            if (response.data.success) {
              showToast(response.data.message);
            } else if (response.data.warning) {
              console.log("test");
              showToast(response.data.message);
            } else {
              showToast("error");
            }
          } catch (error) {
            showToast("error");
            console.error("An error occurred:", error);
          }
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Artist Name"
              onChangeText={handleChange("artist")}
              value={values.artist}
            />
            <TextInput
              style={styles.input}
              placeholder="Song Name"
              onChangeText={handleChange("song_name")}
              value={values.song_name}
            />
            <Rating
              count={5}
              jumpValue={1}
              reviews={["Terrible", "Bad", "Good", "Wow", "Amazing"]}
              reviewColor="#992ab5"
              defaultRating={1}
              size={20}
              ratingContainerStyle={{ paddingVertical: "10px" }}
              ratingBackgroundColor="rgba(0, 0, 0, 0)"
              onFinishRating={(rating) => setUserRating(rating)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1f1e1c",
  },
  input: {
    height: 40,
    width: 120,
    backgroundColor: "white",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "maroon",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 120,
  },
  buttonText: {
    color: "white",
  },
});
