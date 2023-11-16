import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.StatusBarHeight;

//colors #1f1e1c
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#9dc9bf",
  darkLight: "#9ca3af",
  brand: "#8c197d",
  green: "#42f58a",
  red: "#990b0b",
  linkcolor: "#fcba03",
  inputcolor: "#1f1e1c",
};

const {
  primary,
  secondary,
  tertiary,
  darkLight,
  brand,
  green,
  red,
  linkcolor,
  inputcolor,
} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 50px;
  background-color: #1f1e1c;
`;

export const CreateSongContainer = styled.View`
  flex: 1;
  padding: 20px; /* Adjust the padding as needed for CreateSong.js */
  background-color: #1f1e1c;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 150px;
  height: 100px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${inputcolor};
`;

export const StyledInputLabel = styled.Text`
  color: ${primary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${secondary};
  font-size: 16px;
`;

export const OptionButtons = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 40px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const SmallText = styled.Text`
  color: ${primary};
`;

export const TextLinkContents = styled.Text`
  color: ${linkcolor};
  font-size: 15px;
`;

export const SongTitle = styled.Text`
  color: ${primary};
  font-size: 20px;
`;

export const SongButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ isExpanded }) => (isExpanded ? "#2f2f33" : "#992ab5")};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
  backgroundcolor: "rgba(0, 0, 0, 0.5)";
`;

export const ModalContent = styled.View`
  alignitems: "center";
`;

export const Styles = {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageLogo,
  StyledFormArea,
  SubTitle,
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
  Colors,
  StyledButton,
  ButtonText,
  TextLink,
  TextLinkContents,
  SmallText,
  SongTitle,
  SongButton,
  ModalContainer,
  ModalContent,
  OptionButtons,
};
