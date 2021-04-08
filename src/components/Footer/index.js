import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Footer as NBFooter, FooterTab } from 'native-base';

// components
import { Text } from 'src/components';
import { Global, Gutters, Images } from 'src/theme';

// styles
import styles from './styles';

const Footer = ({ exerciseProp, light }) => {
  const [active, setActive] = useState(0)
  const { touch, footer } = styles;
  const { transparentBg } = Global
  const { smallVPadding } = Gutters

  const routes = [
    {
      image: 'home',
      text: 'Home'
    },
    {
      image: 'goals',
      text: 'Goals'
    },
    {
      image: 'stats',
      text: 'Stats'
    },
    {
      image: 'games',
      text: 'Games'
    },
    {
      image: exerciseProp ? 'exercises' : 'more',
      text: exerciseProp ? 'Exercises' : 'More'
    }
  ];

  return (
    <NBFooter style={[transparentBg, footer]}>
      <FooterTab style={transparentBg}>
        {/* {routes.map((screen, i) => (
          <TouchableOpacity
            key={i}
            style={touch}
            onPress={() => setActive(i)}
          >{light ? <Image
            source={FooterImages[
              `${screen.image}${active === i ? 'dark' : 'light'}`
            ]}
          /> :
            <Image
              source={Images[
                `${screen.image}${active === i ? 'dark' : 'light'}`
              ]}
            />}
            <Text
              text={screen.text}
              color={active === i ? "primary" : "secondary"}
              medium
              style={smallVPadding}
            />
          </TouchableOpacity>
        ))} */}
      </FooterTab>
    </NBFooter>
  );
};

export default Footer;
