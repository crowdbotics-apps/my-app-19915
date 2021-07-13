import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components';

export default function Error({errorText}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 17,
          alignSelf: 'center',
          paddingVertical: 8,
          textAlign: 'center',
        }}
        text={errorText}
        color="red"
      />
    </View>
  );
}
