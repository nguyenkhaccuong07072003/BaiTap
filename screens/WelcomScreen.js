import React from 'react';
import { ImageBackground, StyleSheet, View,Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      {}
      <View style={styles.loginButton}></View>

      {}
      <View style={styles.registerButton}></View>
      <Button
      title="Go to ViewImageScreen"
      onPress={() =>
        navigation.navigate("ViewImageScreen")
      }
    />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65', 
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ECDC4',
  },
});

export default WelcomeScreen;
