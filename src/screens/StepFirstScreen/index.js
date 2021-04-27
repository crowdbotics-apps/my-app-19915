import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Content, Icon, Input } from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
// components
import { Text, Button, Test } from 'src/components';
import { Global, Layout, Images, Gutters, Fonts } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const StepFirstScreen = props => {
  const {
    navigation: { navigate },
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedChildren, setSelectedChildren] = useState('');

  const onDateChange = date => {
    setDOB(date);
    setDateText(date);
  };
  const stateSchema = {
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  };
  const validationStateSchema = {
    email: {
      required: true,
      validator: validator.email,
    },
    password: {
      required: true,
      validator: validator.password,
    },
  };

  const assignValues = (fieldName, backendName, value) => {
    handleOnChange(fieldName, value);
  };

  const submitForm = () => {
    const data = {
      password: state.password.value,
      username: state.email.value,
    };
    // onSubmit(data);
  };

  const onPress = val => {
    val === checked ? setChecked() : setChecked(val);
  };

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {
    row,
    fill,
    center,
    selfCenter,
    justifyContentBetween,
    alignItemsCenter,
    fullSize,
  } = Layout;
  const { primaryBg, secondaryBg, borderB, borderColor } = Global;
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
  const { titleSmall } = Fonts;

  const ageRange = [
    '18-24',
    '25-34',
    '35-44',
    '45-54',
    '55-64',
    '64 AND OLDER',
  ];
  const Gender = [
    "MALE",
    "FEMALE",
    "OTHER"
  ];
  const Children = [
    "YES",
    "NO"
  ]

  const onSelectAge = age => {
    setSelectedAge(age), setChecked('');
  };
  const onSelectGender = gender => {
    setSelectedGender(gender), setChecked('');
  };
  const onSelectChildren = child => {
    setSelectedChildren(child), setChecked('');
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

            <View style={{ flex: 1 }}>
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
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
              </ProgressSteps>
            </View>

            <TouchableOpacity
              style={[row, center, fieldWrapper, regularHPadding]}
              onPress={() => onPress(0)}>
              <Image source={Images.age} style={regularHMargin} />
              <Text
                style={[fill, borderColor]}
                text={selectedAge ? selectedAge : 'AGE'}
                color="quaternary"
                category="h6"
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 0 &&
              ageRange.map((age, i) => (
                <View
                  style={[
                    primaryBg,
                    regularHPadding,
                    categoryWrapper,
                  ]}>
                  <TouchableOpacity onPress={() => onSelectAge(age)}>
                    <Text
                      text={age}
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
              <Text text={selectedGender ? selectedGender : "GENDER"} category="p1" style={[fill, borderColor]} />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 1 && Gender.map((gender) =>
              <View
                style={[
                  primaryBg,
                  regularHPadding,
                  categoryWrapper,
                ]}>
                <TouchableOpacity onPress={() => onSelectGender(gender)}>
                  <Text
                    text={gender}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>

              </View>
            )}

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
              <Text text={selectedChildren ? selectedChildren : "CHILDREN"} category="p1" style={[fill, borderColor]} />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 2 && Children.map((child) =>
              <View
                style={[
                  primaryBg,
                  regularHPadding,
                  categoryWrapper,
                ]}>
                <TouchableOpacity onPress={() => onSelectChildren(child)}>
                  <Text
                    text={child}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => navigate('Step2')}
              style={buttonTMargin}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#56D3FB','#53F4EB']}
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

export default StepFirstScreen;
