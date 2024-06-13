import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Accounts = ({ }) => {
    const account = {
        number: 'RH622NJ',
        expiry: '2024-05-18 22:18:04',
        type: 'Hotspot',
        status: 'Expired',
        package: 'Hourly',
        balance: 'KES 0',
        location: 'Mobile',
      };
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Text style={styles.accountNumber}>ACCOUNT NUMBER: <Text style={styles.accountNumberHighlight}>{account.number}</Text></Text>
        <Text style={styles.label}>EXPIRY: <Text style={styles.value}>{account.expiry}</Text></Text>
        <Text style={styles.label}>TYPE: <Text style={styles.value}>{account.type}</Text></Text>
        <Text style={styles.label}>STATUS: <Text style={styles.value}>{account.status}</Text></Text>
        <Text style={styles.label}>PACKAGE: <Text style={styles.value}>{account.package}</Text></Text>
        <Text style={styles.label}>AVAILABLE BALANCE: <Text style={styles.value}>{account.balance}</Text></Text>
        <Text style={styles.label}>LOCATION: <Text style={styles.value}>{account.location}</Text></Text>

        <Button mode="contained" disabled style={styles.confirmButton}>
          Confirm Payment
        </Button>
        <Button mode="contained" style={styles.paymentButton}>
          Make Payment
        </Button>
        <Button mode="contained" style={styles.changePackageButton}>
          Change Package
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  accountContainer: {
    width: '90%',
    backgroundColor: '#0077b6',
    padding: 16,
    borderRadius: 8,
  },
  accountNumber: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  accountNumberHighlight: {
    color: '#ffea00',
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
  value: {
    color: '#ffea00',
  },
  confirmButton: {
    marginTop: 16,
    backgroundColor: '#808080',
  },
  paymentButton: {
    marginTop: 16,
    backgroundColor: '#00ff00',
  },
  changePackageButton: {
    marginTop: 16,
    backgroundColor: '#ffa500',
  },
});

export default Accounts;
