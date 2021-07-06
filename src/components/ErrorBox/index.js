import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { Text } from 'src/components';

export default function ErrorBox({ errorText }) {
  return (
    <View style={styles.container}>
      <Text text={errorText} color="tertiary" />
    </View>
  );
}
