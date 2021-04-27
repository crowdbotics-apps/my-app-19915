import React from 'react';
import { Content, Icon, Input } from 'native-base';
import { View, ImageBackground,TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// components
import { Text, Button } from 'src/components';
import { Global, Layout, Images, Gutters, Fonts } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const ResetPassword = props => {
  const { navigation: { navigate } } = props
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

  const { state, handleOnChange, disable } = useForm(stateSchema, validationStateSchema);
  const { row, fill, center } = Layout;
  const { borderColor } = Global;
  
  const {titleSmall} = Fonts;
  
  const {
    regularHMargin,
    mediumXHMargin,
    mediumXTMargin,
    regularHPadding,
    mediumBMargin,
    smallHMargin,
    largeXTMargin,
    regularVPadding,
    regularBPadding,
  } = Gutters;
  const {
    topWrapper,
    title,
    heading,
    fieldWrapper,
    buttonWrapper,
    backArrowWrapper,
  } = styles;
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
        <View style={[center, smallHMargin]}>
            <View style={topWrapper}>
              <Image source={require('src/assets/images/arrow-back.png')} />
              <Image source={require('src/assets/images/logos.png')} />
            </View>
          </View>
          <View style={mediumXHMargin}>

            <View style={[fill, center]}>
              <Text text="Help!" color="river" style={heading} />
              <Text text="Forgot your password?" color="river" style={title} />
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
                placeholder='ENTER EMAIL'

                onChangeText={value =>
                  assignValues('email', 'email', value)
                }
              />
            </View>
            <TouchableOpacity onPress={() => submitForm()}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#56D3FB','#53F4EB']}
                style={[fill, row, center, buttonWrapper, largeXTMargin]}>
                <Text style={titleSmall} text="Reset my password" color="river" />
              </LinearGradient>
            </TouchableOpacity>
            <View style={[row, center, regularVPadding]}>
              <Text text="or login using" color="river" category='s1' bold />
            </View>
            <View style={[row, center, regularBPadding]}>
              <Image source={Images.google} style={regularHMargin} />
              <Image source={Images.facebook} style={regularHMargin} />
              <Image source={Images.instagram} style={regularHMargin} />
            </View>
          </View>
        </Content>
        <View style={[center, regularVPadding]}>
          <Text color='river' smallTitle>
            Don’t have an account?  {''}
            <Text bold
              smallTitle
              color="golden"
              text="Sign up now"
              onPress={() => navigate('Register')}
            />
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default ResetPassword;
