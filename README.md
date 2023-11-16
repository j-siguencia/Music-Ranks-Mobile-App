# Music-Ranks-Mobile-App

MusicalRanks is a mobile application that allows users to share their musical tastes and thoughts.

# What is our goal?

Our goal for this homework assignment is to design and implement a mobile app with a JavaScript/React-Native frontend. For this homework, we are also using the Model-view-controller(MVC) design pattern to create a state transfer API that connects the front
and back-end of our app. Our app still has the main features that it prides itself in. You are able to Sign Up, Login, and Log out. You can also create rankings for your favorite songs, delete your ratings, view song ratings, and update ratings.


# Steps to Visualizing/Starting your app
1) Download XAMPP and clone the repo below in the xampp/htdocs folder.This will serve as our backend:
```
 git clone https://github.com/Jadyncode66/Musical-Ranks-React-js-WebApp.git
```
2) Follow the pictures of the readMe of that repo to make your backend databases. Once done, open your Control panel for XAMPP and Start Apache and MySQL.
3) Our App uses an Android Emulator in Android Studio. Set up a Pixel 5 API 31 emulator in your Android Studio  application. Run your emulator first. 
4) In order for your app to work, you will need to download these dependences in the same folder as your app which should be named MusicRanks from this repo:

```
npm i react
npm i styled-components
npm i react-native
npm i expo-constants
npm i @react-navigation/native
npm i @react-navigation/native-stack
npm i react-native-ratings
npm i formik
npm i axios
npm i @expo/vector-icons
npm i @react-native-async-storage/async-storage
npm i react-native-vector-icons
npm i expo-status-bar
npm i react-native-gesture-handler
npm i expo-app-loading
```

5) For any API request url, you will have to replace the placeholder message, **InsertIPAddressHere**, with your laptop's IP address:
```
 "http://InsertIPAddressHere/Musical-Ranks-React-js-WebApp/index.php/user/login"
```
6) Then, to start your app, run : 

```
npx expo start
```

7) With your emulator started and your react-native app running, press "a" in your terminal to connect to the react-native app to your emulator.
8) Rank Away


# Our Additional Feature

Building off of our webapp version of Musical Ranks, we decided to add a notification feature using the ToastAndroid built-in module that notifies the user of various actions they might take such as a successfull login, sign, ranked song, etc.

