import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import { Content, Icon, Input } from 'native-base';
import { View, ImageBackground, TouchableOpacity, Modal, Image } from 'react-native';

// components
import { Text, Button } from 'src/components';
import { Global, Layout, Images, Gutters } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const Register = props => {
  const { navigation: { navigate } } = props;
  const [checked, setChecked] = useState('')
  const [dob, setDOB] = useState(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateText, setDateText] = useState('')

  const onDateChange = (date) => {
    setDOB(date)
    setDateText(date)
  }
  const stateSchema = {
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
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
    val === checked ? setChecked(0) : setChecked(val)
  }

  const { state, handleOnChange, disable } = useForm(stateSchema, validationStateSchema);

  const { row, fill, center, alignItemsCenter, fullSize } = Layout;
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
  } = Gutters;
  const {
    icon,
    title,
    heading,
    fieldWrapper,
    backArrowWrapper,
    buttonWrapper,
    modalWrapper,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View
            style={[
              center,
              borderColor,
              largeXTMargin,
              mediumXHMargin,
              mediumBMargin,
              backArrowWrapper
            ]}>
            <Icon
              type="MaterialIcons"
              name="arrow-back"
              style={icon}
            />
          </View>
          <View style={mediumXHMargin}>
            <View style={[fill, center]}>
              <Text text="Welcome!" color="secondary" style={heading} />
              <Text text="Please sign in to continue" color="secondary" style={title} />
            </View>
            <View style={[
              row,
              center,
              fieldWrapper,
              mediumXTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.email} style={regularHMargin} />
              <Input
                placeholder='EMAIL'
                onChangeText={value =>
                  assignValues('email', 'email', value)
                }
              />
            </View>
            <View style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.pass} style={regularHMargin} />
              <Input
                placeholder='PASSWORD'
                onChangeText={value =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            <TouchableOpacity
              style={[
                row,
                center,
                fieldWrapper,
                small2xTMargin,
                regularHPadding,
              ]}
              onPress={() => setIsModalOpen(true)}
            >
              <Image source={Images.age} style={regularHMargin} />
              <Text
                style={[fill, borderColor]}
                text={dateText ? dateText.toString().slice(4, 15) : 'AGE'}
                color="quaternary"
                category="h6"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(1)} style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.gender} style={regularHMargin} />
              <Text text="GENDER" category='p1' style={[fill, borderColor]} />
              <Icon type='MaterialIcons' name='arrow-drop-down' />
            </TouchableOpacity>
            {checked === 1 && (
              <View style={[primaryBg, regularHPadding, regularVPadding]}>
                <Text text="Male" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
                <Text text="Female" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
              </View>
            )}
            <TouchableOpacity onPress={() => onPress(2)} style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.relation} style={regularHMargin} />
              <Text text="RELATIONSHIP STATUS" category='p1' style={[fill, borderColor]} />
              <Icon type='MaterialIcons' name='arrow-drop-down' />
            </TouchableOpacity>
            {checked === 2 && (
              <View style={[primaryBg, regularHPadding, regularVPadding]}>
                <Text text="Male" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
                <Text text="Female" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
              </View>
            )}
            <TouchableOpacity onPress={() => onPress(3)} style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.child} style={regularHMargin} />
              <Text text="CHILDREN" category='p1' style={[fill, borderColor]} />
              <Icon type='MaterialIcons' name='arrow-drop-down' />
            </TouchableOpacity>
            {checked === 3 && (
              <View style={[primaryBg, regularHPadding, regularVPadding]}>
                <Text text="Male" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
                <Text text="Female" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
              </View>
            )}
            <TouchableOpacity onPress={() => onPress(4)} style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.profession} style={regularHMargin} />
              <Text text="PROFESSIONAL STATUS" category='p1' style={[fill, borderColor]} />
              <Icon type='MaterialIcons' name='arrow-drop-down' />
            </TouchableOpacity>
            {checked === 4 && (
              <View style={[primaryBg, regularHPadding, regularVPadding]}>
                <Text text="Male" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
                <Text text="Female" color="secondary" category='p1' style={[borderB, borderColor, regularVPadding]} />
              </View>
            )}
            <View style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.pass} style={regularHMargin} />
              <Input
                placeholder='GOALS'
                onChangeText={value =>
                  assignValues('goals', 'goals', value)
                }
              />
            </View>
            <View style={row}>
              <Button
                text='Sign Up'
                color='tertiary'
                onPress={() => submitForm()}
                style={[
                  fill,
                  center,
                  buttonWrapper,
                  small2xTMargin
                ]}
              />
            </View>
            <View style={[row, center, regularVPadding]}>
              <Text text="or login using" color="secondary" category='s1' bold />
            </View>
            <View style={[row, center, regularBPadding]}>
              <Image source={Images.google} style={regularHMargin} />
              <Image source={Images.facebook} style={regularHMargin} />
              <Image source={Images.instagram} style={regularHMargin} />
            </View>
          </View>
          <View style={[center, regularVPadding]}>
            <Text color='secondary' smallTitle>
              Don’t have an account?  {''}
              <Text text="Sign In now" color="primary" smallTitle onPress={() => navigate('Login')} />
            </Text>
            <Text
              smallTitle
              color="primary"
              style={regularVPadding}
              text="Forgot your password?"
              onPress={() => navigate('ResetPassword')}
            />
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

export default Register;
