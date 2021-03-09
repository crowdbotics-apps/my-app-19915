import React from 'react';
import { Image, View } from 'react-native';

// components
import { Images, Layout } from 'src/theme';

// styles
import styles from './styles';

const Avatar = ({ imageUrl, size, style, round }) => {
  const { image, rounded } = styles;
  const { alignItemsCenter } = Layout;

  return (
    <View style={[alignItemsCenter, round && rounded, style && style]}>
      <Image
        style={[image, round && rounded, styles[size]]}
        source={imageUrl ? { uri: imageUrl } : Images.user}
      />
    </View>
  );
};

export default Avatar;
