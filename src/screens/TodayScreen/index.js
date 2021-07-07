import React from 'react';
import { Container, Content } from 'native-base';
import { View, Image, Text } from 'react-native';

import Card from './components/Card'

const TodayScreen = () => {
  return (
    <>
      <Container>
        <Content showsVerticalScrollIndicator={false}>

          <View style={{
            width: '100%',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center'
          }}>
            <Image
              source={require('../../assets/images/logoSplashScreen.png')}
              style={{
                width: 100,
                height: 60,
                resizeMode: 'contain',
              }}
            />
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            <Card
              shadow
              color='primary'
              subText=" w1"
              heading='Day 1'
              icon="dumbbell"
              description="Chest and Triceps"
            />
            <Card
              shadow
              color='secondary'
              heading='Day 1'
              subText=" w1"
              middleText="35"
              subTextMiddle=" minutes"
              description="Chest and Triceps"
              iconType="FontAwesome5"
              icon="heartbeat"
            />
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <Card
              shadow
              color='tertiary'
              textColor='secondary'
              middleText='Start Workout'
            />
            <Card color='quaternary' />
          </View>
          <Text style={{
            fontSize: 25,
            marginHorizontal: 15,
            marginVertical: 15,
            fontWeight: 'bold',
          }}>Meal 1</Text>
          <Card
            shadow
            color='quaternary'
            textColor='secondary'
            heading='8:00 am'
            middleText="30g"
            subTextMiddle=" 7g"
            description="Chest and Triceps"
            icon="add"
          />
        </Content>
      </Container>
    </>
  );
};
export default TodayScreen
