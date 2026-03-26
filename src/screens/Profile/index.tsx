import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome back, User!</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
