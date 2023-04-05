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
        <StatusBar backgroundColor="white" barStyle="light-content" />

        <TouchableOpacity onPress={() => Actions.pop()}>
          <Icon

            name="arrowleft"
            type="AntDesign"
            style={{ color: "black", fontSize: 25, marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Image style={{ height: height / 4, width: width / 1.1, alignSelf: 'center' }} resizeMode='stretch'
          source={require('../assets/verification.png')} />

        <Text style={{ fontWeight: '600', fontSize: 23, textAlign: "center", marginTop: 50 }}>Verification</Text>


        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 14, fontWeight: '500' }}>Please enter the 6-digit code sent to</Text>

          <Text style={{ color: '#9B56EC', fontSize: 14, fontWeight: 'bold' }}> +1</Text>

        </View>
        <Text style={{ color: '#9B56EC', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>111*****999</Text>




        <View style={styles.root}>
          <CodeField
            value={this.state.code}
            onChangeText={(text) => {
              this.setState({ code: text });
            }}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

 
        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Vendor_Registration_1()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 8 }}>
          <Text style={{ color: 'white', fontSize: 15, }}>Verify</Text>
        </TouchableOpacity>



        <View style={{ backgroundColor: 'white', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', borderWidth: 0.2, justifyContent: 'center', marginTop: 20, borderRadius: 8 }}>
          <Text style={{ color: '#82829B', fontSize: 15, }}>Resend OTP</Text>
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
