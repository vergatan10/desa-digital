import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import React from 'react';

export default function PostsIndexScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Posts Index Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});
