import React from 'react';
import {Text, View} from 'react-native';

const PieDataCell = props => {
  const {cellValue, cellColor} = props;
  return (
    <View style={{flexDirection: 'row', margin: 2}}>
      <Text>{cellValue}</Text>
      <View
        style={{
          height: 20,
          width: 30,
          marginHorizontal: 10,
          backgroundColor: cellColor != undefined ? cellColor : 'red',
        }}
      />
    </View>
  );
};

export default PieDataCell;
