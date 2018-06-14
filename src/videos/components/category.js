import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

function Category(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <ImageBackground
        style={styles.wrapper}
        source={{
          uri: props.background_image
        }}
      >
        <Text style={styles.genre}>{props.genres[0]}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
})

export default Category;
