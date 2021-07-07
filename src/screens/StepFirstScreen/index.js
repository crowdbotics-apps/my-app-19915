import React, {useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Icon, Input} from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
// components
import {Text, Button, Test} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

//actions
import {postStepOne} from './redux/actions';

// styles
import styles from './styles';

const StepFirstScreen = (props) => {
  const {
    navigation: {navigate},
    postStepOne,
    stepOneData,
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedChildren, setSelectedChildren] = useState(0);
  console.log('stepOneData', stepOneData);
  console.log('selectedGender', selectedGender);
  console.log('selectedAge', selectedAge);
  const onDateChange = (date) => {
    setDOB(date);
    setDateText(date);
  };

  const submitForm = () => {
    const data = {
      age: selectedAge,
      gender: selectedGender,
      children: selectedChildren,
    };
    postStepOne(data);
    navigate('StepSecondScreen');
  };

  const onPress = (val) => {
    val === checked ? setChecked() : setChecked(val);
  };

  const {
    row,
    fill,
    center,
    selfCenter,
    justifyContentBetween,
    alignItemsCenter,
    fullSize,
  } = Layout;
  const {primaryBg, secondaryBg, borderB, borderColor} = Global;
  const {
    largeHMargin,
    regularHMargin,
    mediumXHMargin,
    small2xTMargin,
    mediumXTMargin,
    regularHPadding,
    mediumBMargin,
    regularTMargin,
    largeXTMargin,
    regularVPadding,
    regularBPadding,
    largXBMArgin,
    smallVPadding,
  } = Gutters;
  const {
    icon,
    heading,
    topWrapper,
    fieldWrapper,
    backArrowWrapper,
    buttonWrapper,
    modalWrapper,
    buttonTMargin,
    categoryWrapper,
    headingWrapper,
    paraGraphWrapper,
  } = styles;
  const {titleSmall} = Fonts;

  const ageRange = [
    '18-24',
    '25-34',
    '35-44',
    '45-54',
    '55-64',
    '64 and older',
  ];

  const Gender = ['Male', 'Female', 'Other'];

  const Children = ['Yes', 'No'];

  const onSelectAge = (i) => {
    setSelectedAge(i);
    setChecked('');
  };

  const onSelectGender = (i) => {
    setSelectedGender(i);
    setChecked('');
  };

  const onSelectChildren = (i) => {
    setSelectedChildren(i);
    setChecked('');
  };

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[mediumXHMargin, mediumBMargin]}>
            <View
              style={[
                selfCenter,
                justifyContentBetween,
                alignItemsCenter,
                topWrapper,
              ]}>
              <Text style={headingWrapper} color="Sunglo" text="Step 1" />
              <Text
                color="Sunglo"
                style={paraGraphWrapper}
                text={'Before we continue, \ntell us a bit about yourself'}
              />
            </View>

            <View style={{flex: 1}}>
              <ProgressSteps
                marginBottom={30}
                activeStepNumColor="#DF647A"
                disabledStepIconColor="#FFFFFF"
                activeStepIconBorderColor="#FFFFFF"
                activeStepIconColor="#DF647A"
                completedStepIconColor="#FFFFFF"
                completedProgressBarColor="#FFFFFF"
                progressBarColor="#FFFFFF">
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
              </ProgressSteps>
            </View>

            <TouchableOpacity
              style={[row, center, fieldWrapper, regularHPadding]}
              onPress={() => onPress(0)}>
              <Image source={Images.age} style={regularHMargin} />
              <Text
                style={[fill, borderColor]}
                text={ageRange[selectedAge]}
                category="p1"
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 0 &&
              ageRange.map((text, i) => (
                <View
                  key={i}
                  style={[primaryBg, regularHPadding, categoryWrapper]}>
                  <TouchableOpacity onPress={() => onSelectAge(i)}>
                    <Text
                      text={ageRange[i]}
                      color="secondary"
                      category="p1"
                      style={[borderB, borderColor, smallVPadding]}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            <TouchableOpacity
              onPress={() => onPress(1)}
              style={[
                row,
                center,
                fieldWrapper,
                small2xTMargin,
                regularHPadding,
              ]}>
              <Image source={Images.gender} style={regularHMargin} />
              <Text
                text={Gender[selectedGender]}
                category="p1"
                style={[fill, borderColor]}
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 1 &&
              Gender.map((text, i) => (
                <View style={[primaryBg, regularHPadding, categoryWrapper]}>
                  <TouchableOpacity onPress={() => onSelectGender(i)}>
                    <Text
                      text={Gender[i]}
                      color="secondary"
                      category="p1"
                      style={[borderB, borderColor, smallVPadding]}
                    />
                  </TouchableOpacity>
                </View>
              ))}

            <TouchableOpacity
              onPress={() => onPress(2)}
              style={[
                row,
                center,
                fieldWrapper,
                small2xTMargin,
                regularHPadding,
              ]}>
              <Image source={Images.child} style={regularHMargin} />
              <Text
                text={Children[selectedChildren]}
                category="p1"
                style={[fill, borderColor]}
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 2 &&
              Children.map((text,i) => (
                <View style={[primaryBg, regularHPadding, categoryWrapper]}>
                  <TouchableOpacity
                    onPress={() => onSelectChildren(i)}>
                    <Text
                      text={Children[i]}
                      color="secondary"
                      category="p1"
                      style={[borderB, borderColor, smallVPadding]}
                    />
                  </TouchableOpacity>
                </View>
              ))}

            <TouchableOpacity
              onPress={() => submitForm()}
              style={buttonTMargin}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#56D3FB', '#53F4EB']}
                style={[
                  fill,
                  row,
                  center,
                  buttonWrapper,
                  largeXTMargin,
                  largXBMArgin,
                ]}>
                <Text style={titleSmall} text="Continue" color="river" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
        {/* {isModalOpen && (
          <Modal style={alignItemsCenter}>
            <View style={[center, modalWrapper, fullSize]}>
              <DatePicker
                date={dob}
                mode="date"
                style={secondaryBg}
                onDateChange={date => onDateChange(date)}
              />

              <Button
                block
                text="Add"
                category="s1"
                color="tertiary"
                style={[regularTMargin, largeHMargin]}
                onPress={() => setIsModalOpen(false)}
              />
            </View>
          </Modal>
        )} */}
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  stepOneData: state.stepOneData.stepOneData,
});

const mapDispatchToProps = (dispatch) => ({
  postStepOne: (data) => dispatch(postStepOne(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepFirstScreen);
