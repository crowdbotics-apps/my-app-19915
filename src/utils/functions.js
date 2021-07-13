import moment from 'moment';
export const getTimeDifference = (start, end) => {
  let startTime = moment(start, 'HH:mm:ss a');
  let endTime = moment(end, 'HH:mm:ss a');
  // calculate total duration
  let duration = moment.duration(endTime.diff(startTime));
  // duration in hours
  //let hours = parseInt(duration.asHours());
  // duration in minutes
  //let minutes = parseInt(duration.asMinutes())%60;
  let seconds = parseInt(duration.asSeconds()) % 60;
  return seconds;
};
