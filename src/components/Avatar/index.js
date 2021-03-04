import React from 'react';
import { Image, View } from 'react-native';

// components
import { Images, Layout } from 'src/theme';

// styles
import styles from './styles';

const Avatar = ({ imageUrl, size, style }) => {
  const { image } = styles;
  const { alignItemsCenter } = Layout;

  return (
    <View style={[alignItemsCenter, style && style]}>
      <Image
        style={[image, styles[size]]}
        source={imageUrl ? { uri: imageUrl } : Images.user}
      />
    </View>
  );
};

export default Avatar;
