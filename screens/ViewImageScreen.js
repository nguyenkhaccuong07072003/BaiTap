import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const backgroundImage = require('../assets/imageToView.jpg');

const ViewImageScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.closeBox}>
        {/* Close icon */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          {}
        </TouchableOpacity>
      </View>

      {}
      <View style={styles.deleteBox}>
        {}
        <TouchableOpacity
          onPress={() => {
          }}
        >
          {}
        </TouchableOpacity>
      </View>

      {}
      <Image
        source={backgroundImage} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const squareSize = 50; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
  },
  closeBox: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    backgroundColor: 'tomato', 
    width: squareSize,
    height: squareSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBox: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 1,
    backgroundColor: 'green', 
    width: squareSize,
    height: squareSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
