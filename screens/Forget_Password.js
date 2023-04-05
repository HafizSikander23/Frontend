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
import CheckBox from '@react-native-community/checkbox';
import ImageLoad from 'react-native-image-placeholder';
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

      text1: 2,
      text2: 1,
      check_design: 'via SMS',




    }
  }






  changebtn(value, val) {
    this.setState({
      skalton: true
    })

    if (this.state[value] == 2) {


      this.setState({
        text1: 1,
        text2: 1,

        [value]: 2,


      })
    }
    else {
      this.setState({
        text1: 1,
        text2: 1,

        [value]: 2,


      })

    }
    this.setState({
      check_design: val,
      skalton: false
    })
  }



  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>
          <Text style={{ fontWeight: '600', fontSize: 23, width: '90%' }}>Forgot Password</Text>
        </View>






        <ScrollView>


          <Image style={{ height: height / 5, width: width / 1.5, alignSelf: 'center', marginTop: 30 }} resizeMode='contain'
            source={require('../assets/Frame.png')} />



          <Text style={{ fontSize: 12, fontWeight: '500', paddingHorizontal: 15, marginVertical: 15 }}>Select which contact details should we use to reset your password</Text>




          <TouchableOpacity onPress={() => this.changebtn("text1", 'via SMS')}>
            <View style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)}>
              <View style={{ width: 65, height: 65, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eef3ff' }}>
                <Icon name="message1" type="AntDesign" style={{ color: "#9B56EC", fontSize: 23 }} />
              </View>

              <View style={{ marginLeft: 15 }}>
                <Text style={{ color: 'gray', fontSize: 13 }}>via SMS:</Text>
                <Text style={{ color: 'black', fontSize: 14, marginTop: 3, fontWeight: 'bold' }}>+923476452432</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changebtn("text2", 'via Email')}>
            <View style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)}>
              <View style={{ width: 65, height: 65, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eef3ff' }}>
                <Icon name="mail" type="Ionicons" style={{ color: "#9B56EC", fontSize: 23 }} />
              </View>

              <View style={{ marginLeft: 15 }}>
                <Text style={{ color: 'gray', fontSize: 13 }}>via Email:</Text>
                <Text style={{ color: 'black', fontSize: 14, marginTop: 3, fontWeight: 'bold' }}>Testing@email.com</Text>
              </View>
            </View>
          </TouchableOpacity>





          <TouchableOpacity onPress={() => Actions.Verification_Screen()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 30 }}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Continue</Text>
          </TouchableOpacity>


















        </ScrollView>

      </View>

    )
  }
}

const styles = StyleSheet.create({

  active_button: {
    width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#9B56EC', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
  },

  in_active_button: {
    width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#f8f8f9', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
  },

})
export default testing;
