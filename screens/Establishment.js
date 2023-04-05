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



        <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', paddingVertical: 10 }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', fontSize: 19, fontWeight: '600', marginLeft: 10 }}>Establishment address,timings</Text>
        </View>




        <ScrollView>



          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', marginTop: 10 }}>

            <Text style={{ fontSize: 13, fontWeight: '600' }}>Clinique Medico_chirurgicale</Text>
            <Icon name="chevron-small-down" type="Entypo" style={{ color: "#2E2E37", fontSize: 23, }} />



          </View>









          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 17, marginTop: 5 }}>Contact</Text>

          <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', }}>

            {/* <View style={{width:'25%',alignItems:'center', justifyContent:'center'}}> */}

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '25%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+212" placeholderTextColor='gray' />


            {/* </View> */}


            {/* <View style={{width:'72%',justifyContent:'center',alignItems:'center',paddingTop:35}}>  */}
            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '70%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="9876543210" placeholderTextColor='gray' />


            {/* </View> */}


          </View>


          <View style={{ width: width / 1.1, marginTop: 10, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: '600' }}>Establishment name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Clinique Medico-Chirurgicale Sante Pour Tous" placeholderTextColor='gray' />

          </View>





          <View style={{ width: width / 1.1, marginTop: 15, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: '600' }}>Establishment city</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Conakry" placeholderTextColor='gray' />

          </View>






          <View style={{ width: width / 1.1, marginTop: 15, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: '600' }}>Establishment address</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="J9C6+PW Conakry, Guinea" placeholderTextColor='gray' />

          </View>


          <Text style={{ fontSize: 11, fontWeight: '500', color: '#82829B', marginLeft: 18, marginTop: 19 }}>Drop a pin to link your Clinic address</Text>


          <Image style={{ height: height / 5, width: width / 1.1, alignSelf: 'center', marginTop: 5 }} resizeMode='stretch'
            source={require('../assets/map.png')} />




          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 50 }}>Establishment photos</Text>



          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', marginTop: 7 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '62%' }}>
              <Image style={{ height: 70, width: 70, }} resizeMode='stretch'
                source={require('../assets/es1.png')} />

              <Image style={{ height: 70, width: 70, }} resizeMode='stretch'
                source={require('../assets/es2.png')} />

              <View style={{ width: 70, height: 70, backgroundColor: '#EEEEF6', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#2E2E37' }}>+</Text>
                <Text style={{ fontSize: 7, color: '#2E2E37' }}>Add Photos</Text>
              </View>
            </View>
            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 15, }} />




          </View>

          <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 18, marginTop: 10 }}>Practice Timings</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 5 }}>Days</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 30 }}>Clinique 2</Text>















          <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Patient_Tab_Screen()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 70, marginTop: 20, marginBottom: 20 }}>
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
