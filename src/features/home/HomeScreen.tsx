import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../core/theme/colors';
import { typography } from '../../core/theme/typography';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[typography.heroLG, { color: colors.textPrimary }]}>Aura</Text>
      <Text style={[typography.subhead, { color: colors.gold }]}>Home Screen</Text>
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
