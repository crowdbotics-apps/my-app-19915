
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import MyCamera from 'src/components/MyCamera';

// components
import { Text } from 'src/components';
import { Layout, Images, Gutters, Fonts } from 'src/theme';

// styles
import styles from './styles';
import { Colors } from 'src/theme';

const CameraScreen = props => {
  const {
    navigation: { navigate },
  } = props;

  const [active, setActive] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedstyles, setSelectedstyles] = useState([]);

  const onSelectStyle = value => {
    let array = [...selectedstyles];
    if (array.includes(value)) {
      setSelectedstyles(array.filter(item => item !== value));
    }
    // else {
    //   if (selectedstyles.length === 9) {
    //     showMessage({
    //       message: "Selected style can't be more than nine",
    //       type: 'danger',
    //     });
    //   }
    else {
      array.push(value);
      setSelectedstyles(array);
    }
    //}
  };
  const bottomButton = [
    { image: 'preference' },
    { image: 'camsetting' },
    { image: 'cam' },
    { image: 'record' },
    { image: 'gallery' },
  ];
  const filter = [
    {
      text: 'FILTERS',
    },
    {
      text: 'MEDIA',
    },
  ];
  const category = [
    {
      imagelight: 'originallight',
      imagedark: 'originaldark',
    },
    {
      imagelight: 'quotelight',
      imagedark: 'quotedark',
    },
    {
      imagelight: 'musiclight',
      imagedark: 'musicdark',
    },
    {
      imagelight: 'gallerylight',
      imagedark: 'gallerydark',
    },
    {
      imagelight: 'playlight',
      imagedark: 'playdark',
    },
  ];
  const { textMedium } = Fonts;
  const {
    row,
    fill,
    center,
    justifyContentAround,
    justifyContentEvenly,
    justifyContentEnd,
  } = Layout;
  const { small2xTMargin, small2xLMargin, smallBMargin } = Gutters;
  const {
    textWrapper,
    camButtonsWrapper,
    touch,
    sliderWrapper,
    filtersWrapper,
    subTextWrapper,
  } = styles;

  const images = [Images.camerabg, Images.camerabg, Images.camerabg];
  const filterImages = ['filterimg1', 'filterimg2', 'filterimg3', 'filterimg4'];


  return (
    <>
      <View style={[small2xTMargin, small2xLMargin]}>
        <View>
          <TouchableOpacity>
            <Image source={Images.camarrowback} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[fill, justifyContentEnd, sliderWrapper]}>
        <SliderBox
          sliderBoxHeight={600}
          parentWidth={395}
          dotColor={Colors.darkeden}
          images={images}
          inactiveDotColor={Colors.eden}
        />
        <View>
          <TouchableOpacity>
            <Image style={{ zIndex: 2, position: "absolute", marginTop: -100, marginLeft: 300 }} source={Images.share} />
          </TouchableOpacity>
        </View>
        {active === 0 && (
          <View style={[center, justifyContentAround, row, filtersWrapper]}>
            {filterImages.map((image, i) => (
              <TouchableOpacity key={i}>
                <Image source={Images[image]} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {active === 1 && (
          <View style={[center, justifyContentAround, row, subTextWrapper]}>
            {category.map((screen, i) => (
              <TouchableOpacity
                key={i}
                style={touch}
                onPress={() => onSelectStyle(i)}>
                <Image
                  style={smallBMargin}
                  source={
                    Images[
                    selectedstyles.includes(i)
                      ? screen.imagedark
                      : screen.imagelight
                    ]
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={[textWrapper, center, justifyContentAround, row]}>
          {filter.map((screen, i) => (
            <TouchableOpacity
              key={i}
              style={touch}
              onPress={() => setActive(i)}>
              <Text
                text={screen.text}
                color={active === i ? 'atlantis' : 'secondary'}
                medium
                style={textMedium}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={[row, center, justifyContentEvenly, camButtonsWrapper]}>
          {bottomButton.map((screen, i) => (
            <TouchableOpacity onPress={() => i === 2 && setModalVisible(true)}>
              <Image source={Images[screen.image]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={fill}>
          <MyCamera />
        </View>
      </Modal>
    </>
  );
};

export default CameraScreen;
