import React, {useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {Content, Icon} from 'native-base';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
// components
import {Text, Button} from 'src/components';
import {Global, Layout, Images, Gutters, Fonts} from 'src/theme';

//actions
import {postStepTwo} from './redux/actions';

// styles
import styles from './styles';

const StepSecondScreen = (props) => {
  const {
    requesting,
    stepOneData,
    stepTwoData,
    postStepTwo,
    navigation: {navigate},
  } = props;
  const [checked, setChecked] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState(0);
  const [selectedProfession, setSelectedProfession] = useState(0);
  console.log('stepOneData', stepOneData);
  const relationshipStatus = ['Married', 'Unmarried'];

  const professionalStatus = ['Employee', 'Unemployee', 'Business'];

  const onDateChange = (date) => {
    setDOB(date);
    setDateText(date);
  };

  const submitForm = () => {
    const data = {
      relationship_status: selectedRelation,
      profession_status: selectedProfession,
    };
    postStepTwo(data);
    navigate('StepThirdScreen');
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

  const {
    row,
    fill,
    center,
    selfCenter,
    justifyContentBetween,
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
    regularTMargin,
    largeXTMargin,
    regularVPadding,
    smallVPadding,
  } = Gutters;

  const {
    fieldWrapper,
    buttonWrapper,
    modalWrapper,
    buttonTMargin,
    wrapper,
    textWrapper,
    paragraphWrapper,
  } = styles;

  const {titleSmall} = Fonts;
  console.log('stepTwoData', stepTwoData);

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={[mediumXHMargin, mediumBMargin]}>
            <View
              style={[
                selfCenter,
                justifyContentBetween,
                alignItemsCenter,
                wrapper,
              ]}>
              <Text style={textWrapper} color="chelseacucumber" text="Step 2" />
              <Text
                color="chelseacucumber"
                style={paragraphWrapper}
                text={'Before we continue, \ntell us a bit about yourself'}
              />
            </View>

            <View style={{flex: 1}}>
              <ProgressSteps
                marginBottom={30}
                activeStep={1}
                activeStepNumColor="#6DAF5B"
                disabledStepIconColor="#FFFFFF"
                activeStepIconBorderColor="#FFFFFF"
                activeStepIconColor="#6DAF5B"
                completedStepIconColor="#FFFFFF"
                completedProgressBarColor="#FFFFFF"
                progressBarColor="#FFFFFF">
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
                <ProgressStep removeBtnRow={true}>
                  <View style={{alignItems: 'center'}} />
                </ProgressStep>
              </ProgressSteps>
            </View>

            <TouchableOpacity
              onPress={() => onPress(2)}
              style={[row, center, fieldWrapper, regularHPadding]}>
              <Image source={Images.relation} style={regularHMargin} />
              <Text
                text={relationshipStatus[selectedRelation]}
                category="p1"
                style={[fill, borderColor]}
              />
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 2 &&
              relationshipStatus.map((text, i) => (
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
              <Icon type="MaterialIcons" name="arrow-drop-down" />
            </TouchableOpacity>
            {checked === 4 &&
              professionalStatus.map((text, i) => (
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
              onPress={() => submitForm()}
              style={buttonTMargin}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#56D3FB', '#53F4EB']}
                style={[fill, row, center, buttonWrapper, largeXTMargin]}>
                <Text style={titleSmall} text="Continue" color="river" />
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
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.stepTwoData.requesting,
  stepOneData: state.stepOneData.stepOneData,
  stepTwoData: state.stepTwoData.stepTwoData,
});

const mapDispatchToProps = (dispatch) => ({
  postStepTwo: (data) => dispatch(postStepTwo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepSecondScreen);
