import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomTabs from './BottomTab';

function Layout({children}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
