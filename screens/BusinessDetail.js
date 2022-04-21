import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BusinessDetail(props) {
  const {name, location} = props.route.params;
  const revenue = props.route.params.revenue;
  console.log(revenue);

  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: 24}}>
      <View style={{backgroundColor: '#fff', width: 45}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.navigate('Home')}></TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{location.address}</Text>
            <Text style={styles.address}>{location.city},</Text>
            <Text style={styles.country}>{location.country}</Text>
          </View>
          <View style={styles.chartBox}>
            {/* <ChartView style={styles.chart} values={chartData(props)} /> */}
            <Text style={styles.revenue}>past 6 months - monthly revenue</Text>
          </View>
        </View>
        {/* <Image source={require('./assets/me.png')} style={styles.me} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
  },
  backButton: {
    backgroundColor: 'white',
    borderColor: '#303746',
    borderWidth: 1.5,
    justifyContent: 'center',
    padding: 10,
    width: 45,
    height: 45,
    borderRadius: 50,
    marginVertical: 22,
  },
  arrow: {
    transform: [{scaleX: -1}],
    height: 18,
    width: 18,
    // resizeMode: 'contain',
  },
  chartBox: {
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
  },
  chart: {
    height: 350,
    width: 300,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 550,
    width: 350,
    backgroundColor: 'pink',
  },
  name: {
    color: '#303746',
    textTransform: 'lowercase',
    fontSize: 40,
    fontFamily: 'GillSans-UltraBold',
  },
  address: {
    color: '#303746',
    textTransform: 'lowercase',
    fontSize: 18,
    fontFamily: 'GillSans-UltraBold',
  },
  country: {
    color: '#303746',
    textTransform: 'lowercase',
    fontSize: 24,
    fontFamily: 'GillSans-UltraBold',
  },
  revenue: {
    color: '#303746',
    textTransform: 'lowercase',
    fontSize: 12,
    fontFamily: 'GillSans-UltraBold',
  },
  detailsContainer: {
    paddingTop: 12,
  },
  me: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    paddingTop: 100,
  },
});
