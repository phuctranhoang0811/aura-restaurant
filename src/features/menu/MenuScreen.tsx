import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../core/theme/colors';
import { typography } from '../../core/theme/typography';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={[typography.heading, { color: colors.textPrimary }]}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
