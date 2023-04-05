import { Row } from 'native-base';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon, } from 'native-base';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

class testing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox_state: false,
      multi_image_check: 'false',
      multi_Images: [],
      subject: "",
      number: "",
      symptoms: "",
      spinner: false,
      checked: false,
      checked1: false,
      profile: null,
      code: ""




    }
  }

  render() {
    const CELL_COUNT = 6;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
          <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />

        </View>




        <Image style={{ height: height / 4, width: width / 1.1, alignSelf: 'center' }} resizeMode='stretch'
          source={require('../assets/password.png')} />

        <Text style={{ fontWeight: '600', fontSize: 23, textAlign: "center", marginTop: 25 }}>Create new password</Text>



        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: '500', marginTop: 10 }}>Your new password must be different</Text>


        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: '500' }}>from previous used passwords</Text>



        <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>New password</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#e6e6e6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your password" placeholderTextColor='gray' />
          {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

        </View>




        <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Confirm new password</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#e6e6e6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Confirm your password" placeholderTextColor='gray' />
          {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

        </View>



        <View style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 8, marginTop: 35 }}>
          <Text style={{ color: 'white', fontSize: 15, }}>Reset password</Text>
        </View>



      </View>

    )
  }
}
const styles = StyleSheet.create({

  root: { paddingHorizontal: 30, alignSelf: 'center', marginTop: 30 },

  cell: {
    width: 45,
    height: 45,
    lineHeight: 42,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#EEEEF6',
    borderWidth: 1,
    borderColor: '#EEEEF6'
  },
  focusCell: {
    borderColor: '#007fff',
  },
})

export default testing;
