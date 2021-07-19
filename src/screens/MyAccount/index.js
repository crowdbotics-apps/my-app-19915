import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Input} from 'native-base';
import {View, TouchableOpacity, Modal, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
// components
import {Text, Button, Header, Footer, MenuIcon} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

//actions
import {getProfile, updateProfile} from './redux/actions';

// styles
import styles from './styles';

const MyAccount = (props) => {
  const {
    navigation: {navigate},
    user,
    profileData,
  } = props;

  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState(0);
  const [selectedProfession, setSelectedProfession] = useState(0);
  const [selectedChild, setSelectedChild] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    props.getProfile();
  }, []);

  useEffect(() => {
    if (profileData) {
      const relationData = profileData.relationship_status;
      const professionData = profileData.profession_status;
      const childrenData = profileData.children;
      setSelectedRelation(relationData);
      setSelectedProfession(professionData);
      setSelectedChild(childrenData);
    }
  }, [profileData]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const relationshipStatus = ['Married', 'Unmarried'];
  const childrenStatus = ['Yes', 'No'];
  const professionalStatus = ['Professional', 'Non-Professional', 'Business'];

  const onDateChange = (date) => {
    setDOB(date);
    setDateText(date);
  };

  const submitForm = () => {
    const data = {
      children: selectedChild,
      relationship_status: selectedRelation,
      profession_status: selectedProfession,
    };
    if (profileImage) {
      data.image = `data:${profileImage.type};base64,${profileImage.base64}`;
    }

    props.updateProfile(data, user);
  };

  const onPress = (val) => {
    val === checked ? setChecked(0) : setChecked(val);
  };

  const onSelectRelation = (i) => {
    setSelectedRelation(i);
    setChecked('');
  };
  const onSelectProfession = (i) => {
    setSelectedProfession(i);
    setChecked('');
  };

  const onSelectChildren = (i) => {
    setSelectedChild(i);
    setChecked('');
  };

  const {row, fill, center, justifyContentCenter, alignItemsCenter, fullSize} =
    Layout;
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
  console.log('user', user);

  const selectImage = () => {
    ImagePicker.launchImageLibrary({includeBase64: true}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setProfileImage(response.assets[0]);
      }
    });
  };
  console.log('profileData', profileData);
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
          <TouchableOpacity onPress={() => selectImage()}>
            <View style={userProfile}>
              <Image
                style={image}
                source={
                  profileImage
                    ? {uri: profileImage.uri}
                    : {uri: profileData.image}
                }
              />
              <Image style={profilecam} source={Images.profilecam} />
            </View>
          </TouchableOpacity>

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
                onChangeText={(value) => assignValues('email', 'email', value)}
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
              secureTextEntry={!isEnabled}
              placeholder="PASSWORD"
            />
            <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
              <Icon
                style={{marginHorizontal: 15}}
                name={isEnabled ? 'eye' : 'eye-slash'}
                size={20}
              />
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
              text={relationshipStatus[selectedRelation]}
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 2 &&
            relationshipStatus.map((relation, i) => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectRelation(i)}>
                  <Text
                    text={relationshipStatus[i]}
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
              text={professionalStatus[selectedProfession]}
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 4 &&
            professionalStatus.map((profession, i) => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity onPress={() => onSelectProfession(i)}>
                  <Text
                    text={professionalStatus[i]}
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
              text={selectedChild ? 'Yes' : 'No'}
              category="p1"
              style={[fill, borderColor]}
            />
          </TouchableOpacity>
          {checked === 3 &&
            childrenStatus.map((child) => (
              <View style={[primaryBg, regularHPadding]}>
                <TouchableOpacity
                  onPress={() => onSelectChildren(child === 'Yes')}>
                  <Text
                    text={child}
                    color="secondary"
                    category="p1"
                    style={[borderB, borderColor, smallVPadding]}
                  />
                </TouchableOpacity>
              </View>
            ))}
          <TouchableOpacity onPress={() => submitForm()} style={buttonTMargin}>
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
      <Footer activeRoute="" navigation={props.navigation} />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  profileData: state.profileData.profileData,
  requestingImage: state.profileData.requestingImage,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
  updateProfile: (data, user) => dispatch(updateProfile(data, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
