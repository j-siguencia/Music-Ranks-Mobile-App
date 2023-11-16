import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export const SignUpContainer = styled.View`
  flex: 1;
  padding: 75px;
  padding-top: 0px;
  background-color: #1f1e1c;
  align-items: center;
  justify-content: center;
`;

export const AppTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #8c197d;
  padding: 10px;
`;

export const PageTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #9dc9bf;
`;

export const LoginText = styled.Text`
  text-align: center;
  padding-top: 10px;
  font-size: 13px;
  color: #fcba03;
`;

export const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export const StyledInputLabel = styled.Text`
  color: #ffffff;
  font-size: 13px;
  text-align: left;
`;

export const StyledButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const StyleButton = styled.TouchableOpacity`
  height: 40px;
  margin-top: 10px;
  background-color: #8c197d;
  justify-content: center;
  align-items: center;
`;
