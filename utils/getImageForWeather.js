//نور هشام محمود القطشان 120190581
const images = {
  // new images .jpg
  Clear: require('../assets/clear.jpg'),
  Rain: require('../assets/rain.jpg'),
  Snow: require('../assets/snow.jpg'),
  Clouds: require('../assets/cloud.jpg'),
  'Heavy Cloud': require('../assets/heavy-cloud.png'),
  'Light Cloud': require('../assets/light-cloud.png'),
  'Heavy Rain': require('../assets/heavy-rain.png'),
  'Light Rain': require('../assets/light-rain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Thunder: require('../assets/thunder.png'),
  Hail: require('../assets/hail.png'),
};

export default weather => images[weather];
