import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CheckBox, Content, Input} from 'native-base';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native';
// components
import {Text, Button, ErrorBox} from 'src/components';
import {Layout, Images, Gutters, Fonts} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// actions
import {login} from '../App/redux/actions';

// styles
import styles from './styles';

const Login = props => {
  const {
    navigation: {navigate},
    requesting,
  } = props;

  const [checked, setChecked] = useState(false);

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
    props.onSubmit(data);
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {row, fill, center, alignItemsCenter, justifyContentCenter} = Layout;

  const {titleSmall} = Fonts;

  const {
    largeHMargin,
    mediumTMargin,
    regularHMargin,
    mediumXHMargin,
    small2xTMargin,
    mediumXTMargin,
    regularHPadding,
    regularVPadding,
    largeXTMargin,
    regularBPadding,
  } = Gutters;
  const {
    title,
    bgColor,
    heading,
    fieldWrapper,
    buttonWrapper,
    checkBoxWrapper,
  } = styles;
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[mediumXHMargin, justifyContentCenter]}>
            <View style={[fill, center, regularBPadding, mediumXTMargin]}>
              <Image source={Images.logos} />
              <Text text="Welcome!" color="river" style={heading} />
              <Text
                text="Please sign in to continue"
                color="river"
                style={title}
              />
            </View>
            <View
              style={[
                row,
                center,
                fieldWrapper,
                mediumXTMargin,
                regularHPadding,
              ]}>
              <Image source={Images.email} style={regularHMargin} />
              <Input
                placeholder="EMAIL"
                onChangeText={value => assignValues('email', 'email', value)}
              />
            </View>
            <ErrorBox errorText={state.email.error} />
            <View
              style={[
                row,
                center,
                fieldWrapper,
                small2xTMargin,
                regularHPadding,
              ]}>
              <Image source={Images.pass} style={regularHMargin} />
              <Input
                secureTextEntry
                placeholder="PASSWORD"
                onChangeText={value =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            <ErrorBox errorText={state.password.error} />
          </View>
          <View style={[mediumXHMargin, small2xTMargin, alignItemsCenter, row]}>
            <CheckBox
              color="white"
              style={[checkBoxWrapper, checked && bgColor]}
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <Text
              text="Remember me on this device"
              color="river"
              category="h5"
            />
          </View>
          <TouchableOpacity onPress={() => submitForm()}>
            {requesting ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#A9D670', '#FFF16F']}
                style={[
                  fill,
                  row,
                  center,
                  largeHMargin,
                  buttonWrapper,
                  largeXTMargin,
                ]}>
                <Text style={titleSmall} text="Login" color="river" />
              </LinearGradient>
            )}
          </TouchableOpacity>
          <View style={[row, center, regularVPadding]}>
            <Text text="or login using" color="river" category="s1" bold />
          </View>
          <View style={[row, center, regularBPadding]}>
            <Image source={Images.google} style={regularHMargin} />
            <Image source={Images.facebook} style={regularHMargin} />
            <Image source={Images.instagram} style={regularHMargin} />
          </View>
          <View style={[center, regularVPadding]}>
            <Text color="river" smallTitle>
              Don’t have an account? {''}
              <Text
                bold
                text="Sign up now"
                color="golden"
                smallTitle
                onPress={() => navigate('SignUp')}
              />
            </Text>
            <Text
              bold
              text="Forgot your password?"
              color="golden"
              style={regularVPadding}
              smallTitle
              onPress={() => navigate('ResetPassword')}
            />
          </View>
        </Content>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.login.requesting,
  user: state.app.user,
  token: state.app.authToken,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
