import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { feedVar } from './src/variables';
import Header from './src/components/Header';
import FeedList from './src/components/FeedList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Feeds */}
      <FeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    //backgroundColor: 'purple',
  },

});
