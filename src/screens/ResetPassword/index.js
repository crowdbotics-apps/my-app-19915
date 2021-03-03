import React from 'react';
import { Content, Icon, Input } from 'native-base';
import { View, ImageBackground, Image } from 'react-native';

// components
import { Text, Button } from 'src/components';
import { Global, Layout, Images, Gutters } from 'src/theme';

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
  const {
    regularHMargin,
    mediumXHMargin,
    mediumXTMargin,
    regularHPadding,
    mediumBMargin,
    largeXTMargin,
    regularVPadding,
    regularBPadding,
  } = Gutters;
  const {
    icon,
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
              <Text text="Help!" color="secondary" style={heading} />
              <Text text="Forgot your password?" color="secondary" style={title} />
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
            <View style={row}>
              <Button
                text='Reset my password'
                color='tertiary'
                onPress={() => submitForm()}
                style={[
                  fill,
                  center,
                  buttonWrapper
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
        </Content>
        <View style={[center, regularVPadding]}>
          <Text color='secondary' smallTitle>
            Don’t have an account?  {''}
            <Text
              smallTitle
              color="primary"
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
