import React, {useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Input} from 'native-base';
import {View, TouchableOpacity, Modal, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
// components
import {Text, Button, Header, Footer, MenuIcon} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const MyAccount = props => {
  const {
    navigation: {navigate},
    user,
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');

  const relationshipStatus = ['YES', 'NO'];

  const childrenStatus = ['YES', 'NO'];

  const professionalStatus = ['PROFESSIONAL', 'NON-PROFESSIONAL'];

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

  const onSelectRelation = relation => {
    setSelectedRelation(relation), setChecked('');
  };
  const onSelectProfession = profession => {
    setSelectedProfession(profession), setChecked('');
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {
    row,
    fill,
    center,
    justifyContentCenter,
    alignItemsCenter,
    fullSize,
  } = Layout;
  const {primaryBg, secondaryBg, borderB, borderColor} = Global;
  const {
    largeHMargin,
    regularHMargin,
    mediumXHMargin,
    small2xTMargin,
    regularHPadding,
    mediumBMargin,
    mediumXTMargin,
    regularTMargin,
    largeXTMargin,
    smallRMargin,
    smallVPadding,
  } = Gutters;
  const {
    fieldWrapper,
    buttonWrapper,
    modalWrapper,
    buttonTMargin,
    image,
    backImage,
    userProfile,
    profilecam,
  } = styles;
  const {titleSmall, textMedium} = Fonts;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Header
        left={<MenuIcon action={() => props.navigation.openDrawer()} />}
      />
      <View style={[row, alignItemsCenter, mediumBMargin]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={Images.camarrowback} style={backImage} />
        </TouchableOpacity>
        <Text
          text="My Account"
          color="river"
          style={[titleSmall, {marginLeft: 60}]}
        />
      </View>
      <Content showsVerticalScrollIndicator={false}>
        <View style={[mediumXHMargin, mediumBMargin]}>
          <View style={userProfile}>
            <Image style={image} source={Images.userprofile} />
            <Image style={profilecam} source={Images.profilecam} />
          </View>

          <View style={justifyContentCenter}>
            <View
              style={[
                row,
                center,
                fieldWrapper,
                regularHPadding,
                mediumXTMargin,
              ]}>
              <Image source={Images.email} style={regularHMargin} />
              <Input
                value={user.email}
                placeholder="EMAIL"
                onChangeText={value => assignValues('email', 'email', value)}
              />
            </View>
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
              value={user.password}
              secureTextEntry={isEnabled}
              placeholder="PASSWORD"
            />
            <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
              <Icon style={{marginHorizontal: 15}} name={isEnabled ? "eye" : "eye-slash"} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[textMedium, smallRMargin]} text="Reset" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => onPress(2)}
            style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
            <Image source={Images.relation} style={regularHMargin} />
            <Text
              text={selectedRelation ? selectedRelation : 'RELATIONSHIP STATUS'}
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 2 &&
            relationshipStatus.map(relation => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectRelation(relation)}>
                  <Text
                    text={relation}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            ))}

          <TouchableOpacity
            onPress={() => onPress(4)}
            style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
            <Image source={Images.profession} style={regularHMargin} />
            <Text
              text={
                selectedProfession ? selectedProfession : 'PROFESSIONAL STATUS'
              }
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 4 &&
            professionalStatus.map(profession => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity
                  onPress={() => onSelectProfession(profession)}>
                  <Text
                    text={profession}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            ))}

          <TouchableOpacity
            onPress={() => onPress(3)}
            style={[
              row,
              center,
              fieldWrapper,
              small2xTMargin,
              regularHPadding,
            ]}>
            <Image source={Images.child} style={regularHMargin} />
            <Text
              text={selectedRelation ? selectedRelation : 'CHILDREN'}
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 3 &&
            childrenStatus.map(relation => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectRelation(relation)}>
                  <Text
                    text={relation}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            ))}
          <TouchableOpacity
            onPress={() => navigate('StepThirdScreen')}
            style={buttonTMargin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#56D3FB', '#53F4EB']}
              style={[fill, row, center, buttonWrapper, largeXTMargin]}>
              <Text style={titleSmall} text="Save Changes" color="river" />
            </LinearGradient>
          </TouchableOpacity>
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
      <Footer activeRoute="" navigation={props.navigation} />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.app.user,
});

export default connect(
  mapStateToProps,
  null,
)(MyAccount);
