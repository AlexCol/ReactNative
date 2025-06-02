import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { feedVar } from './src/variables';

export default function App() {
  const [feed, setFeed] = useState(feedVar);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/img/logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('./assets/img/send.png')}
          style={styles.send}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  //headers
  header: {
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: 'black',
    elevation: 1

  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  }
});
