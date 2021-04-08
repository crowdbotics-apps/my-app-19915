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
import { Text, Button } from 'src/components';
import { Global, Layout, Images, Gutters, Fonts } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const StepSecondScreen = props => {
  const {
    navigation: { navigate },
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');

  const relationshipStatus = [
    "YES",
    "NO"
  ];

  const professionalStatus = [
    "PROFESSIONAL",
    "NON-PROFESSIONAL"
  ]

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
    val === checked ? setChecked(0) : setChecked(val);
  };

  const onSelectRelation = relation => {
    setSelectedRelation(relation), setChecked('');
  };
  const onSelectProfession = profession => {
    setSelectedProfession(profession), setChecked('');
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
    regularHPadding,
    mediumBMargin,
    regularTMargin,
    largeXTMargin,
    regularVPadding,
    smallVPadding
  } = Gutters;
  const {
    fieldWrapper,
    buttonWrapper,
    modalWrapper,
    buttonTMargin,
    wrapper,
    textWrapper,
    paragraphWrapper,
  } = styles;
  const { titleSmall } = Fonts;

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
                wrapper,
              ]}>
              <Text style={textWrapper} color="chelseacucumber" text="Step 2" />
              <Text
                color="chelseacucumber"
                style={paragraphWrapper}
                text={'Before we continue, \ntell us a bit about yourself'}
              />
            </View>

            <View style={{ flex: 1 }}>
              <ProgressSteps
                marginBottom={30}
                activeStep={1}
                activeStepNumColor="#6DAF5B"
                disabledStepIconColor="#FFFFFF"
                activeStepIconBorderColor="#FFFFFF"
                activeStepIconColor="#6DAF5B"
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
              onPress={() => onPress(2)}
              style={[row, center, fieldWrapper, regularHPadding]}>
              <Image source={Images.relation} style={regularHMargin} />
              <Text
                text={selectedRelation ? selectedRelation : "RELATIONSHIP STATUS"}
                category="p1"
                style={[fill, borderColor]}
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 2 && relationshipStatus.map((relation) =>
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectRelation(relation)}>
                  <Text
                    text={relation}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>

              </View>
            )}

            <TouchableOpacity
              onPress={() => onPress(4)}
              style={[
                row,
                center,
                fieldWrapper,
                small2xTMargin,
                regularHPadding,
              ]}>
              <Image source={Images.profession} style={regularHMargin} />
              <Text
                text={selectedProfession ? selectedProfession : "PROFESSIONAL STATUS"}
                category="p1"
                style={[fill, borderColor]}
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 4 && professionalStatus.map((profession) =>
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectProfession(profession)}>
                  <Text
                    text={profession}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => navigate('Step3')}
              style={buttonTMargin}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#A9D670', '#FFF16F']}
                style={[fill, row, center, buttonWrapper, largeXTMargin]}>
                <Text style={titleSmall} text="Continue" color="river" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
        {isModalOpen && (
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
        )}
      </ImageBackground>
    </>
  );
};

export default StepSecondScreen;
