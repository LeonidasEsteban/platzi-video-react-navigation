import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Login
