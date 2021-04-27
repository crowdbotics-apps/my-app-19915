import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Content, Icon, Input } from 'native-base';
import { showMessage } from 'react-native-flash-message';
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
import { Global, Layout, Images, Gutters, Fonts, Colors } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const StepThirdScreen = props => {
  const {
    navigation: { navigate },
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateText, setDateText] = useState('');
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
  const { primaryBg, secondaryBg, border, borderB, borderColor } = Global;
  const {
    smallBMargin,
    largeHMargin,
    mediumXHMargin,
    regularHPadding,
    mediumBMargin,
    regularTMargin,
    largXBMArgin,
  } = Gutters;
  const {
    icon,
    title,
    text,
    heading,
    fieldWrapper,
    backArrowWrapper,
    buttonWrapper,
    modalWrapper,
    textWrapper,
    buttonTMargin,
  } = styles;
  const { titleSmall } = Fonts;

  const category = [
    'I want to increase happiness',
    'I want to express gratitude',
    'I want an energy boost',
    'I want to feel more confident',
    'I want to feel more relaxed',
    'I want to feel peace',
    'I want to reduce stress',
    'I want to calm anxiety',
    'I want to lower my blood pressure and heart rate',
  ];

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
                textWrapper,
              ]}>
              <Text style={heading} color="pelorous" text="Step 3" />
              <Text
                color="pelorous"
                style={text}
                text={'Finally, what would you like to achieve?'}
              />
            </View>

            <View style={[fill]}>
              <ProgressSteps
                marginBottom={30}
                activeStep={2}
                activeStepNumColor="#40B1C0"
                disabledStepIconColor="#FFFFFF"
                activeStepIconBorderColor="#FFFFFF"
                activeStepIconColor="#40B1C0"
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

            {category.map((text, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => onSelectStyle(i)}
                style={[
                  fill,
                  row,
                  center,
                  fieldWrapper,
                  smallBMargin,
                  regularHPadding,
                  { backgroundColor: selectedstyles.includes(i) ? Colors.white : Colors.botticelli }
                ]}>
                <Text text={text} />
              </TouchableOpacity>
            ))}

            <TouchableOpacity onPress={() => navigate('Dashboard')} style={largXBMArgin}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#56D3FB','#53F4EB']}
                style={[
                  fill,
                  row,
                  center,
                  buttonWrapper,
                  buttonTMargin,
                ]}>
                <Text style={titleSmall} text="Continue" color="river" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
      </ImageBackground>
    </>
  );
};

export default StepThirdScreen;
