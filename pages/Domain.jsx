import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Domain = ({ navigation }) => {
  const [domain, setDomain] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Accounts');
    console.log('Submitted domain:', domain);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        label='Domain'
        placeholder='Enter domain'
        value={domain}
        onChangeText={text => setDomain(text)}
        style={styles.input}
      />
      <Button mode='contained' onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'aliceblue',
    height: '100%',
    width: '100%',
  },
  input: {
    width: '80%',
    marginBottom: 16,
  },
  button: {
    width: '80%',
  },
});

export default Domain;
