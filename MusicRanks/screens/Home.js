import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Rating, AirbnbRating } from "react-native-ratings";
import { SmallText, Styles } from "../components/jstyle";
import { UserInterfaceIdiom } from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../components/CredentialsContext";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Octicons";
import axios from "axios";

import CreateSong from "./CreateSong";

const Welcome = ({ navigation }) => {
  const [modalOpen, SetModalOpen] = useState(false);
  const [songData, setSongData] = useState([]);
  const [expandedItem, setExpandedItem] = useState("");
  const [isDeleteModalVisable, setDeleteModalVisible] = useState(false);
  const [isUpdateModalVisable, setUpdateModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { storedCredentials, setstoredCredentials } =
    useContext(CredentialsContext);
  const [userRating, setUserRating] = useState(0);
  const { username } = storedCredentials;

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  const clearLogin = () => {
    AsyncStorage.removeItem("MusicRankCredentials")
      .then(() => {
        showToast("Logged out");
        setstoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const res = await fetch(
        "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/song/showall"
      );
      const getdata = await res.json();
      setSongData(getdata);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    onRefresh();
    const getcategory = async () => {
      try {
        const res = await fetch(
          "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/song/showall"
        );
        const getdata = await res.json();
        setSongData(getdata);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getcategory();
  }, [modalOpen]);

  const deleteModal = (itemId) => {
    setSelectedItemId(itemId);
    setDeleteModalVisible(!isDeleteModalVisable);
  };

  const updateModal = (itemId) => {
    setSelectedItemId(itemId);
    setUpdateModalVisible(!isUpdateModalVisable);
  };

  const handleDelete = async (songID) => {
    try {
      const response = await axios.post(
        "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/song/delete",
        {
          id: songID,
        }
      );
      console.log("Delete response:", response);
      if (response.data.success) {
        console.log(response.data.success);
        setDeleteModalVisible(false);
        onRefresh();
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleUpdateRating = async (newRating, songId) => {
    console.log(newRating);
    try {
      const response = await axios.post(
        "http://Insert IP Address Here/Musical-Ranks-React-js-WebApp/index.php/song/update",
        {
          id: songId,
          rating: newRating,
        }
      );

      console.log(response);
      if (response.data.success) {
        console.log("Rating change was a success");

        setUpdateModalVisible(false);
        onRefresh();
      } else if (response.data.warning) {
        console.log("Warning message in ratings");
      } else {
        console.log("there was an error with the ratings");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const renderSongItem = ({ item, index }) => (
    <View>
      <Styles.SongButton
        onPress={() => setExpandedItem(index === expandedItem ? null : index)}
        isExpanded={index === expandedItem}
      >
        <Styles.SongTitle>
          {item.song} by {item.artist}
        </Styles.SongTitle>
        <Text>{index === expandedItem ? "▲" : "▼"}</Text>
      </Styles.SongButton>

      {index === expandedItem && (
        <View style={{ justifyContent: "center" }}>
          <Styles.SmallText>Ranked by: {item.username}</Styles.SmallText>
          <AirbnbRating
            count={5}
            defaultRating={item.rating} // Replace with your actual rating value
            size={20}
            showRating={false}
            isDisabled
          />

          {/* Check if the user and item.user is the same and then show update and delete icons */}

          {item.username === username && (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Icon.Button name="pencil" onPress={() => updateModal(item.id)} />
              <Icon.Button name="trash" onPress={() => deleteModal(item.id)} />

              {isDeleteModalVisable && selectedItemId === item.id && (
                <Styles.ModalContainer>
                  <Styles.ModalContent>
                    <Modal
                      animationType="slide"
                      transparent={false}
                      visible={isDeleteModalVisable}
                      onRequestClose={deleteModal}
                      presentationStyle="fullScreen"
                    >
                      <Text>Are you sure you want to delete?</Text>
                      <Styles.OptionButtons
                        onPress={() => handleDelete(item.id)}
                        style={{ backgroundColor: "#18750c" }}
                      >
                        <Styles.ButtonText>Delete</Styles.ButtonText>
                      </Styles.OptionButtons>
                      <Styles.OptionButtons
                        onPress={() => setDeleteModalVisible(false)}
                      >
                        <Styles.ButtonText>Cancel</Styles.ButtonText>
                      </Styles.OptionButtons>
                    </Modal>
                  </Styles.ModalContent>
                </Styles.ModalContainer>
              )}

              {isUpdateModalVisable && selectedItemId === item.id && (
                <Styles.ModalContainer>
                  <Styles.ModalContent>
                    <Modal
                      animationType="slide"
                      transparent={false}
                      visible={isUpdateModalVisable}
                    >
                      {/* Update Modal content goes here */}

                      {/* <Text>Update Modal for item id: {selectedItemId}</Text> */}

                      <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "Good", "Wow", "Amazing"]}
                        reviewColor="#992ab5"
                        defaultRating={1}
                        size={20}
                        ratingContainerStyle={{
                          backgroundColor: "#2f2f33",
                          paddingVertical: "10px",
                        }}
                        onFinishRating={(rating) => setUserRating(rating)}
                      />

                      <Styles.OptionButtons
                        onPress={() => handleUpdateRating(userRating, item.id)}
                        style={{ backgroundColor: "#18750c" }}
                      >
                        <Styles.ButtonText>Submit</Styles.ButtonText>
                      </Styles.OptionButtons>

                      <Styles.OptionButtons
                        onPress={() => setUpdateModalVisible(false)}
                      >
                        <Styles.ButtonText>Cancel</Styles.ButtonText>
                      </Styles.OptionButtons>
                    </Modal>
                  </Styles.ModalContent>
                </Styles.ModalContainer>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );

  return (
    <Styles.StyledContainer
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Styles.SmallText>Create Song</Styles.SmallText>
      <MaterialIcons
        name="add"
        size={24}
        color="white"
        onPress={() => SetModalOpen(true)}
      />
      <FlatList
        data={songData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSongItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <Modal visible={modalOpen} animationType="slide">
        <View style={{ backgroundColor: "#1f1e1c" }}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => SetModalOpen(false)}
            color="white"
          />
          <CreateSong username={username} />
        </View>
      </Modal>
      <Styles.StyledButton onPress={clearLogin}>
        <Styles.ButtonText>Log out</Styles.ButtonText>
      </Styles.StyledButton>
    </Styles.StyledContainer>
  );
};
export default Welcome;
