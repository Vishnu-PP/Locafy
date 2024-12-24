import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [apiResponse, setApiResponse] = useState('');

  const testApi = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/api/test');
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      setApiResponse('Error: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Button title="Test API Connection" onPress={testApi} />
      {apiResponse ? <Text style={styles.response}>{apiResponse}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  response: {
    marginTop: 20,
    color: 'green',
  },
});

export default HomeScreen;
