import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {CheckBox, Content, Input} from 'native-base';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
// components
import {Text, ErrorBox, Error} from 'src/components';
import {Layout, Images, Gutters, Fonts} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// actions
import {login, resetServerError} from '../App/redux/actions';
import {socialLoginAction} from 'src/screens/App/redux/actions';
// styles
import styles from './styles';

const Login = props => {
  const {
    navigation: {navigate},
    requesting,
    serverErrors,
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

  useEffect(() => {
    serverErrors && props.resetServerError();
    return () => {
      serverErrors && props.resetServerError();
    };
  }, []);

  const assignValues = (fieldName, backendName, value) => {
    serverErrors && props.resetServerError();
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

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_friends',
    ]).then(
      result => {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          console.log(
            '==> Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(async accessToken => {
            props.socialLoginAction({
              key: accessToken.accessToken,
              provider: 'facebook',
            });
            // console.log('key-------------',key)
            navigation.navigate('Home');
          });
        }
      },
      function(error) {
        console.log('==> Login fail with error: ' + error);
      },
    );
  };

  const {row, fill, center, alignItemsCenter, justifyContentCenter} = Layout;

  const {titleSmall, textMedium} = Fonts;

  const {
    largeHMargin,
    regularHMargin,
    mediumXHMargin,
    regularHPadding,
    regularVPadding,
    mediumTMargin,
    smallBPadding,
    smallTMargin,
    smallVPadding,
  } = Gutters;
  const {
    logo,
    title,
    bgColor,
    social,
    heading,
    errorBoxStyle,
    fieldWrapper,
    buttonWrapper,
    checkBoxWrapper,
    activityIndicatorWrapper,
  } = styles;
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[mediumXHMargin, justifyContentCenter]}>
            <View style={[fill, center, smallTMargin]}>
              <Image style={logo} source={Images.logos} />
              <Text text="Welcome!" color="river" style={heading} />
              <Text
                text="Please sign in to continue"
                color="river"
                style={title}
              />
            </View>
            {serverErrors && <Error errorText={serverErrors} />}
            <View style={[row, center, fieldWrapper, regularHPadding]}>
              <Image
                source={serverErrors ? Images.emailerror : Images.email}
                style={regularHMargin}
              />
              <Input
                placeholderTextColor={serverErrors ? 'red' : null}
                placeholder="EMAIL"
                onChangeText={value => assignValues('email', 'email', value)}
              />
            </View>
            <View style={errorBoxStyle}>
              <ErrorBox errorText={state.email.error} />
            </View>
            <View style={[row, center, fieldWrapper, regularHPadding]}>
              <Image
                source={serverErrors ? Images.passworderror : Images.pass}
                style={regularHMargin}
              />
              <Input
                secureTextEntry
                placeholderTextColor={serverErrors ? 'red' : null}
                placeholder="PASSWORD"
                onChangeText={value =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            <View style={errorBoxStyle}>
              <ErrorBox errorText={state.password.error} />
            </View>
          </View>
          <View style={[mediumXHMargin, alignItemsCenter, row]}>
            <CheckBox
              color="white"
              style={[checkBoxWrapper, checked && bgColor]}
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <Text
              style={textMedium}
              text="Remember me on this device"
              color="river"
              category="h5"
            />
          </View>
          <TouchableOpacity onPress={() => submitForm()}>
            {requesting ? (
              <View style={[center, activityIndicatorWrapper]}>
                <ActivityIndicator size="large" color="#FFF" />
              </View>
            ) : (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#56D3FB', '#53F4EB']}
                style={[
                  fill,
                  row,
                  center,
                  largeHMargin,
                  buttonWrapper,
                  mediumTMargin,
                ]}>
                <Text style={titleSmall} text="Login" color="river" />
              </LinearGradient>
            )}
          </TouchableOpacity>
          <View style={[row, center, regularVPadding]}>
            <Text text="or login using" color="river" category="s1" />
          </View>
          <View style={[row, center, smallBPadding]}>
            <Image style={[regularHMargin, social]} source={Images.google} />
            <Image style={[regularHMargin, social]} source={Images.facebook} />
            <Image style={[regularHMargin, social]} source={Images.instagram} />
          </View>
          <View style={[center, smallVPadding]}>
            <Text color="river" medium>
              Don’t have an account?{' '}
              <Text
                bold
                text="Sign up now"
                color="golden"
                medium
                onPress={() => navigate('SignUp')}
              />
            </Text>
            <Text
              bold
              text="Forgot your password?"
              color="golden"
              style={smallVPadding}
              medium
              onPress={() => navigate('ResetPassword')}
            />
          </View>
        </Content>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.app.requesting,
  user: state.app.user,
  token: state.app.authToken,
  serverErrors: state.app.serverErrors,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
  socialLoginAction: data => dispatch(loginWithFacebook(data)),
  resetServerError: () => dispatch(resetServerError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
