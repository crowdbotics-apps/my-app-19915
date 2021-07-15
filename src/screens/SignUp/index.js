import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {
  View,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// components
import {Text, Button, ErrorBox, Error} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
// import validator from 'src/utils/validation';

//action
import {resetServerError} from 'src/screens/SignUp/redux/actions';
import {facebookLogin as facebookLoginAction} from 'src/screens/App/redux/actions';
import {signUp} from './redux/actions';

// styles
import styles from './styles';

const SignUp = (props) => {
  const {
    navigation: {navigate},
    requesting,
    serverErrors,
  } = props;
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateText, setDateText] = useState('');

  const onDateChange = (date) => {
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
      //validator: validator.email,
    },
    password: {
      required: true,
      //validator: validator.password,
    },
  };

  useEffect(() => {
    props.resetServerError();
    return () => {
      props.resetServerError();
    };
  }, []);

  const assignValues = (fieldName, backendName, value) => {
    serverErrors && props.resetServerError();
    handleOnChange(fieldName, value);
  };

  const submitForm = () => {
    const data = {
      email: state.email.value,
      password: state.password.value,
    };
    props.onSubmit(data);
  };

  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        alert('Login was cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          props.facebookLogin(data.accessToken.toString());
        });
      }
    } catch (error) {
      alert(`Login failed with error: ${error}`);
    }
  };

  const {state, handleOnChange} = useForm(stateSchema, validationStateSchema);

  const {titleSmall} = Fonts;
  const {row, fill, center, alignItemsCenter, fullSize} = Layout;
  const {secondaryBg} = Global;
  const {
    largeHMargin,
    smallHMargin,
    regularHMargin,
    mediumXHMargin,
    regularHPadding,
    regularTMargin,
    smallVPadding,
    regularVPadding,
    smallBPadding,
  } = Gutters;
  const {
    topWrapper,
    title,
    logo,
    social,
    backImage,
    heading,
    errorBoxStyle,
    fieldWrapper,
    buttonWrapper,
    modalWrapper,
    activityIndicatorWrapper,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.signupbg} style={fill}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={[topWrapper, center, fill]}>
          <Image style={backImage} source={Images.arrowback} />
        </TouchableOpacity>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[center, smallHMargin]}>
            <Image
              style={logo}
              source={require('src/assets/images/logos.png')}
            />
          </View>
          <View style={mediumXHMargin}>
            <View style={[fill, center]}>
              <Text text="Welcome!" color="river" style={heading} />
              <Text text="Create new account" color="river" style={title} />
            </View>
            {serverErrors && (
              <Error errorText={String(serverErrors).toUpperCase()} />
            )}
            <View style={[row, center, fieldWrapper, regularHPadding]}>
              <Image source={Images.email} style={regularHMargin} />
              <Input
                placeholder="ENTER EMAIL"
                onChangeText={(value) => assignValues('email', 'email', value)}
              />
            </View>
            {state.email.error ? (
              <View style={errorBoxStyle}>
                <ErrorBox errorText={state.email.error} />
              </View>
            ) : null}

            <View style={[row, center, fieldWrapper, regularHPadding]}>
              <Image source={Images.pass} style={regularHMargin} />
              <Input
                secureTextEntry
                placeholder="ENTER PASSWORD"
                onChangeText={(value) =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            {state.password.error ? (
              <View style={errorBoxStyle}>
                <ErrorBox errorText={state.password.error} />
              </View>
            ) : null}
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
                  style={[fill, row, center, buttonWrapper]}>
                  <Text style={titleSmall} text="Sign up" color="river" />
                </LinearGradient>
              )}
            </TouchableOpacity>

            <View style={[row, center, regularVPadding]}>
              <Text text="or sign up using" color="river" category="s1" />
            </View>
            <View style={[row, center, smallBPadding]}>
              <TouchableOpacity>
                <Image
                  source={Images.google}
                  style={[regularHMargin, social]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => facebookLogin()}>
                <Image
                  source={Images.facebook}
                  style={[regularHMargin, social]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={Images.instagram}
                  style={[regularHMargin, social]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[center, smallVPadding]}>
            <Text color="river" medium>
              Already have an account? {''}
              <Text
                bold
                text="Sign In now"
                color="golden"
                medium
                onPress={() => navigate('Login')}
              />
            </Text>
            <Text
              bold
              medium
              color="golden"
              style={smallVPadding}
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
                onDateChange={(date) => onDateChange(date)}
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
const mapStateToProps = (state) => ({
  requesting: state.signUp.requesting,
  serverErrors: state.signUp.serverErrors,
  requestingFacebook: state.app.requestingFacebook,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(signUp(data)),
  resetServerError: () => dispatch(resetServerError()),
  facebookLogin: (accessToken) => dispatch(facebookLoginAction(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
