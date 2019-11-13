/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PieChart from 'react-native-pie-chart';
import PieDataCell from './src/piedata';
import ImageButton from './src/ImageButton';

class AppHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart_wh: 250,
      series: [123, 400, 123, 789, 537],
      sliceColor: ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'],
    };
  }
  reCreatePieChart() {
    let tempArray = [];
    this.state.series.map(item => {
      const val = Math.floor(Math.random() * Math.floor(1000));
      tempArray.push(val);
    });
    this.setState({series: tempArray});
  }

  render() {
    const {chart_wh, series, sliceColor} = this.state;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 10,
            }}>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.7}
              coverFill={'#FFF'}
            />
            <View style={{margin: 20}}>
              <Text style={{marginBottom: 20}}>PieChart Demo Data</Text>

              {series.map((item, index) => {
                return (
                  <PieDataCell
                    key={index.toString()}
                    cellValue={`${item}`}
                    cellColor={`${sliceColor[index]}`}
                  />
                );
              })}
              <ImageButton
                buttonStyle={{marginTop: 30, backgroundColor: 'green'}}
                text={'Re Create'}
                onPress={() => {
                  this.reCreatePieChart();
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default AppHome;
