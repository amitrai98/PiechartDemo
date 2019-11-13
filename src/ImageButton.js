import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ImageButton = props => {
  const {
    text,
    image,
    dirction,
    imageStyle,
    textStyle,
    buttonStyle,
    disabled,
    onPress,
  } = props;
  return (
    <TouchableOpacity style={[style.container, buttonStyle]} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  dirction: PropTypes.string,
  imageStyle: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.object,
};

ImageButton.defaultProps = {
  buttonStyle: {backgroundColor: 'green'},
  textStyle: {alignSelf: 'center', color: 'white'},
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    justifyContent: 'center',
  },
});

export default ImageButton;
