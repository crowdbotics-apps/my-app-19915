import React from 'react';

import {View, Image} from 'react-native';

// components
import {Text} from 'src/components';

const Test = (prop) => {
  function ageRender(age) {
    if (age < 18) {
      return `Im  under ${age}`;
    }
    return `im ${age}`;
  }
  return (
    <View style={{flex: 1}}>
      <Image source={prop.image} />
      <Text text={prop.name} />
      <Text text={ageRender(prop.age)} />
    </View>
  );
};
export default Test;
