import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

class viewModule extends Component {
 
  onPressButton() {
      Alert.alert("","ffff");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.inputgroup}>
        <TextInput style={styles.input}
                   placeholder={'请输入手机号'}
        />
        <TextInput style={styles.input}
                   placeholder={'请输入密码'}
                   secureTextEntry={true}
        />
        </View>
         <View style={[styles.textstyle]}>
            <Text onPress={this.onPressButton} style={[styles.textview]}>
                登陆
            </Text>
          </View>
          <View style={[styles.textstyle]}>
            <Text style={[styles.textview]}>
                注册
            </Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
  },
  inputgroup:{
    marginBottom:30,
  },
  startpos:{
    top:totalHeight*0.36,
  },
  textstyle: {
    height:36,
    borderWidth: 1,
    borderRadius:8,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop:5,
    flexDirection:'row',
  },
  textview:{
    color: 'white',
    fontSize: 18,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
    height:45,
    borderWidth:1,
    textAlign: 'center',
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4,
    backgroundColor: 'gray',
  }
});

AppRegistry.registerComponent('viewModule', () => viewModule);
