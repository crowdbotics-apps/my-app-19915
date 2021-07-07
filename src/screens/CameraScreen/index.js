import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {connect} from 'react-redux';
//components
import {Text} from 'src/components';

// utils
import {getTimeDifference} from 'src/utils/functions';

// styles
import styles from './styles';
import {Layout, Images, Gutters, Fonts} from 'src/theme';

//actions
import {updateSmileData} from '../Dashboard/redux/actions';

const CameraScreen = (props) => {
  const {user} = props;
  const [active, setActive] = useState(0);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [timeArray, setTimeArray] = useState([]);
  const [isSmiling, setIsSmiling] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalCounts, setTotalCounts] = useState(0);

  const onUpdateSeconds = () => {
    props.updateSmileData(
      {second: totalSeconds, user: user.id, count: totalCounts},
      props.navigation,
    );
  };

  const onSelectStyle = (value) => {
    let array = [...selectedStyles];
    if (array.includes(value)) {
      setSelectedStyles(array.filter((item) => item !== value));
    } else {
      array.push(value);
      setSelectedStyles(array);
    }
  };

  const bottomButton = [
    {image: 'preference'},
    {image: 'camsetting'},
    {image: 'cam'},
    {image: 'record'},
    {image: 'gallery'},
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

  const {textMedium} = Fonts;
  const {
    row,
    fill,
    center,
    justifyContentAround,
    justifyContentBetween,
    justifyContentEvenly,
    justifyContentEnd,
  } = Layout;
  const {small2xTMargin, smallHPadding, smallBMargin} = Gutters;
  const {
    textWrapper,
    camButtonsWrapper,
    touch,
    mediaImage,
    filtersWrapper,
    subTextWrapper,
  } = styles;

  const filterImages = ['filterimg1', 'filterimg2', 'filterimg3', 'filterimg4'];

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
  };

  const onFacesDetected = async (data) => {
    const {faces} = data;
    if (faces.length[0]) {
      return;
    }
    await faces.map((face) => {
      if (face.smilingProbability > 0.299) {
        !isSmiling && setIsSmiling(true);
        setTimeArray([...timeArray, new Date()]);
      } else {
        if (isSmiling) {
          const start = timeArray[0];
          const end = timeArray.pop();
          const seconds = getTimeDifference(start, end);
          setTotalSeconds(totalSeconds + seconds);
          setTotalCounts(totalCounts + 1);
          setTimeArray([]);
          setIsSmiling(false);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications.all
        }
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
        onFacesDetected={onFacesDetected}>
        <View
          style={[row, small2xTMargin, smallHPadding, justifyContentBetween]}>
          <View style={fill}>
            {!isSmiling && (
              <TouchableOpacity onPress={onUpdateSeconds}>
                <Image source={Images.camarrowback} />
              </TouchableOpacity>
            )}
          </View>
          <View style={[fill, {alignItems: 'flex-end'}]}>
            {isSmiling && <Text text="Smiling" />}
          </View>
        </View>
        <View style={[fill, justifyContentEnd]}>
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
                    style={[smallBMargin, mediaImage]}
                    source={
                      Images[
                        selectedStyles.includes(i)
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
                  color={active === i ? 'malibu' : 'secondary'}
                  medium
                  style={textMedium}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={[row, center, justifyContentEvenly, camButtonsWrapper]}>
            {bottomButton.map((screen, i) => (
              <TouchableOpacity key={i}>
                <Image source={Images[screen.image]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.dashboard.data,
  user: state.app.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateSmileData: (data, navigation) =>
    dispatch(updateSmileData(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
