import React from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { View, ImageBackground, Image } from 'react-native';

// components
import { Text } from 'src/components';
import { Global, Layout, Images, Gutters } from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const Login = props => {
  const { onSubmit, requesting } = props;
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

  const resetBackEndError = (fieldName, backendName, value) => {
    handleOnChange(fieldName, value);
  };

  const submitForm = () => {
    const data = {
      password: state.password.value,
      username: state.email.value,
    };
    onSubmit(data);
  };

  const { state, handleOnChange, disable } = useForm(stateSchema, validationStateSchema);

  const { fill, center, fullSize, selfCenter } = Layout;
  const { border, borderB, borderR4, borderColor } = Global;
  const {
    tinyVPadding,
    largeVMargin,
    smallVPadding,
    regularHPadding,
  } = Gutters;
  const {
    imgWrapper,
    mainWrapper,
    inputWrapper,
    buttonWrapper,
    parentImgWrapper,
  } = styles;
  return (
    <>
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[fill, center, parentImgWrapper]}>
            <Text text="Jane Doe" color="secondary" style={{ color: '#313114' }} category="h6" />
          </View>
        </Content>
      </Container>
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
