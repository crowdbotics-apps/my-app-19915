import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CheckBox, Content, Input } from 'native-base';
import { View, ImageBackground, Image } from 'react-native';

// components
import { Text, Button, ErrorBox } from 'src/components';
import { Layout, Images, Gutters } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// actions
import { login } from './redux/actions';

// styles
import styles from './styles';

const Login = props => {
  const { navigation: { navigate } } = props;

  const [checked, setChecked] = useState(false)

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
    console.log('Login');
    const data = {
      password: state.password.value,
      username: state.email.value,
    };
  };

  const { state, handleOnChange, disable } = useForm(stateSchema, validationStateSchema);

  const { row, fill, center, alignItemsCenter, justifyContentCenter } = Layout;
  const {
    largeHMargin,
    mediumTMargin,
    regularHMargin,
    mediumXHMargin,
    small2xTMargin,
    mediumXTMargin,
    regularHPadding,
    regularVPadding,
    regularBPadding,
  } = Gutters;
  const {
    title,
    bgColor,
    heading,
    fieldWrapper,
    buttonWrapper,
    checkBoxWrapper
  } = styles;
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[mediumXHMargin, justifyContentCenter]}>
            <View style={[fill, center, regularBPadding, mediumXTMargin]}>
              <Image source={Images.logos} />
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
            <ErrorBox errorText={state.email.error} />
            <View style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
              <Image source={Images.pass} style={regularHMargin} />
              <Input
                secureTextEntry
                placeholder='PASSWORD'
                onChangeText={value =>
                  assignValues('password', 'password', value)
                }
              />
            </View>
            <ErrorBox errorText={state.password.error} />
          </View>
          <View style={[mediumXHMargin, small2xTMargin, alignItemsCenter, row]}>
            <CheckBox
              color='white'
              style={[checkBoxWrapper, checked && bgColor]}
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <Text text="Please sign in to continue" color="secondary" category="h5" />
          </View>
          <View style={row}>
            <Button
              text='Login'
              color='tertiary'
              onPress={() => submitForm()}
              style={[
                fill,
                center,
                largeHMargin,
                buttonWrapper,
                mediumTMargin
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
          <View style={[center, regularVPadding]}>
            <Text color='secondary' smallTitle>
              Don’t have an account?  {''}
              <Text text="Sign up now" color="primary" smallTitle onPress={() => navigate('Register')} />
            </Text>
            <Text text="Forgot your password?" color="primary" style={regularVPadding} smallTitle />
          </View>
        </Content>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.login.requesting
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
