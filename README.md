# Music-Ranks-Mobile-App

**PLEASE MAKE NOTE: depending on how you clone the repository this may affect how things run, specifically with the axios requests. Instances of this are seen most obviously in the Home.js file. Right now the path is set to a specific folder name, but this may vary. Ensure when testing that the path is correct.**

MusicalRanks is a mobile application that allows users to share their musical tastes and thoughts. Listeners from across the platform can not only rank their personal tastes of music, but they can upvote/downvote the rankings of their fellow users!

# What is our goal?

Our goal for this homework assignment is to design and implement a single page app with a JavaScript/React frontend. For this homework we are also using the Model-view-controller(MVC) design pattern to create a state transfer API that connects the front
and back-end of our app. Our app still has the main features that it prides itself in. You are able to Sign Up, Login, and Log out. You can also create rankings for your favorite songs, delete your ratings, view song ratings, and update ratings.


# Steps to Visualizing/Starting your app
1) Download XAMPP and clone the repo below in the xampp/htdocs folder.This will serve as our backend:
```
 git clone https://github.com/Jadyncode66/Musical-Ranks-React-js-WebApp.git
```
2) Follow the pictures of the readMe of that repo to make your backend databases. Once done, open your Control panel for XAMPP and Start Apache and MySQL.
3) Our App uses an Android Emulator in Android Studio. Set up a Pixel 5 API 31 emulator in your Android Studio  application. Run your emulator first. 
4) In order for your app to work, you will need to download these dependences in the same folder as your a:

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

5) Then to start your app, run : 

```
npx expo start
```
4) With your emulator started and your react-nativve app running, press "a" in your terminal to connect to the react-native app to your emulator.
5) Rank Away




# Additional Feature

Building off of our webapp version of Musical Ranks, we decided to add a notification feature using the ToastAndroid module that notifies the user of various actions they might take.

