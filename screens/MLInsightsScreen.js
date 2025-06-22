import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MLInsightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AI Insights & Predictions</Text>
      {/* Show ML outputs like price prediction, breeding alerts, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MLInsightsScreen;
