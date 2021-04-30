import React, {useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

// components
import {Text, Button, ErrorBox} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';
import {signUp} from './redux/actions';

const SignUp = props => {
  const {
    navigation: {navigate},
    requesting,
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateText, setDateText] = useState('');

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
      email: state.email.value,
      password: state.password.value,
      goals: [],
    };
    props.onSubmit(data);
  };

  const onPress = val => {
    val === checked ? setChecked(0) : setChecked(val);
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {titleSmall} = Fonts;
  const {row, fill, center, alignItemsCenter, fullSize} = Layout;
  const {secondaryBg} = Global;
  const {
    largeHMargin,
    smallHMargin,
    regularHMargin,
    mediumXHMargin,
    small2xTMargin,
    regularHPadding,
    regularTMargin,
    largeXTMargin,
    regularVPadding,
    regularBPadding,
  } = Gutters;
  const {
    topWrapper,
    title,
    heading,
    errorStyle,
    fieldWrapper,
    buttonWrapper,
    modalWrapper,
    activityIndicatorWrapper,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.signupbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[center, smallHMargin]}>
            <View style={topWrapper}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source={Images.arrowback} />
              </TouchableOpacity>
              <Image source={require('src/assets/images/logos.png')} />
            </View>
          </View>
          <View style={mediumXHMargin}>
            <View style={[fill, center]}>
              <Text text="Welcome!" color="river" style={heading} />
              <Text text="Create new account" color="river" style={title} />
            </View>
            <View style={[row, center, fieldWrapper, regularHPadding]}>
              <Image source={Images.email} style={regularHMargin} />
              <Input
                placeholder="ENTER EMAIL"
                onChangeText={value => assignValues('email', 'email', value)}
              />
            </View>
            <View style={errorStyle}>
              <ErrorBox errorText={state.email.error} />
            </View>

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
                placeholder="SELECT PASSWORD"
                onChangeText={value =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            <View style={errorStyle}>
              <ErrorBox errorText={state.password.error} />
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
                  colors={['#56D3FB','#53F4EB']}
                  style={[fill, row, center, buttonWrapper, largeXTMargin]}>
                  <Text style={titleSmall} text="Sign up" color="river" />
                </LinearGradient>
              )}
            </TouchableOpacity>

            <View style={[row, center, regularVPadding]}>
              <Text text="or sign up using" color="river" category="s1" bold />
            </View>
            <View style={[row, center, regularBPadding]}>
              <Image source={Images.google} style={regularHMargin} />
              <Image source={Images.facebook} style={regularHMargin} />
              <Image source={Images.instagram} style={regularHMargin} />
            </View>
          </View>
          <View style={[center, regularVPadding]}>
            <Text color="river" smallTitle>
              Already have an account? {''}
              <Text
                bold
                text="Sign In now"
                color="golden"
                smallTitle
                onPress={() => navigate('Login')}
              />
            </Text>
            <Text
              bold
              smallTitle
              color="golden"
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
const mapStateToProps = state => ({
  requesting: state.signUp.requesting,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(signUp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
