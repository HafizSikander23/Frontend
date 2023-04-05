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
    const text = 'Terms of Service';
    const text1 = 'Privacy Policy';

    const terms = text.split('').map(word => (
      <TouchableOpacity onPress={() => Actions.Terms_And_Conditions()}>
        <Text style={{ color: '#2E2E37', fontSize: 15, marginBottom: -5, fontWeight: 'bold' }}>{word}</Text>
      </TouchableOpacity>
    ));


    const privacy = text1.split('').map(word => (
      <TouchableOpacity onPress={() => this.open_privacy()}>
        <Text style={{ color: '#2E2E37', fontSize: 15, marginBottom: -5, fontWeight: 'bold' }}>{word}</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={{ flex: 1, backgroundColor: 'white', }}>


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>


            <Text style={{ fontWeight: 'bold', fontSize: 18, fontWeight: '500' }}>Doctor's hours</Text>
            <Text>    </Text>
          </View>

        </View>

        <ScrollView>







          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 15, fontWeight: '600' }}>Select Clinic</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Clinique Medico-Chirurgicale Sante Pour Tous" placeholderTextColor='#2E2E37' />

          </View>






          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 40 }} >Doctor's hours</Text>


          <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Same as establishment hours</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Different hours</Text>

            </View>







          </View>












          <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 18, marginTop: 20 }} >Consultation timings</Text>

          <View style={{ width: width / 1.000001, alignSelf: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 18, marginTop: 30, color: '#077D55' }}>Inclinic timings should be within practice timings Mon-Sun 9:00AM-7:00PM </Text>

            <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 18, marginTop: 8, color: '#077D55' }}>Video consultation timings can be outside practice timings.</Text>


            <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 18, marginTop: 8, color: '#077D55' }}>Different hours: Doctors can setup their availaibility through their time slots </Text>


            <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 18, marginTop: 8, color: '#077D55' }}>Doctor's hours will be the same as the practice</Text>

          </View>








          <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Education()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 70, marginTop: 240 }}>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, }}>Save</Text>
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
