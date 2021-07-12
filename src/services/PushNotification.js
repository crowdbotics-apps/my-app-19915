import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
const RemotePushController = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
      AsyncStorage.setItem('FCMToken', token.token);
    },

    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },

    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
    senderID: '848401145267',
  });

  localNotification = () => {
    PushNotification.localNotification({
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 60 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      /* Android Only Properties */
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });
  };
};

export default RemotePushController;
