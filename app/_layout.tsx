import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First React Native Application Using Expo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the View takes the full height of the screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#f5f5f5', // Optional: Background color
  },
  text: {
    fontSize: 20, // Adjust font size
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Ensure the text aligns centrally
    color: '#333', // Optional: Text color
  },
});

export default App;
