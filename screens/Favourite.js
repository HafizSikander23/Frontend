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

      text3: 1,
      text4: 1,
      text5: 1,
      text6: 1,
      text7: 1,
      text0: 2,


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


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>My Doctors</Text>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>     </Text>

          </View>
        </View>


        <View style={{ paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', height: 50, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5, backgroundColor: '#EEEEF6' }}>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.in_active_button}>
              <Text style={styles.in_active_text}>Consulted</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.active_button}>
              <Text style={styles.active_text}>Favourite</Text>
            </View>
          </TouchableOpacity>


        </View>










        <TouchableOpacity activeOpacity={0.8}


          style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, borderBottomWidth: 1.5, paddingBottom: 23, borderBottomColor: 'lightgray' }}>

          <View>

            <Image style={{
              width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

            }} source={require('../assets/f1.png')} />





          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginLeft: 10, width: '77%', }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                <View>


                  <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', }}>Dr. Jane Fernandes Dcosta</Text>
                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '500', marginTop: 5 }}>Cardiologist</Text>




                  <View style={{ backgroundColor: 'white', height: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderColor: '#9B56EC', borderWidth: 1, width: 150, marginTop: 10, marginRight: 50 }}>
                    <Text style={{ color: '#9B56EC', fontSize: 15, }}>Book appointment</Text>
                  </View>




                </View>


              </View>


            </View>



            <Icon name="heart" type="AntDesign" style={{ color: '#FA5343', marginTop: 3.5, fontSize: 20, }} />



          </View>
        </TouchableOpacity>






        <TouchableOpacity activeOpacity={0.8}


          style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, paddingBottom: 23, }}>

          <View>

            <Image style={{
              width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

            }} source={require('../assets/f2.png')} />





          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginLeft: 10, width: '77%', }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                <View>


                  <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', }}>M.D. Esther Howard</Text>
                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '500', marginTop: 5 }}>General Physician</Text>




                  <View style={{ backgroundColor: 'white', height: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderColor: '#159AB3', borderWidth: 1, width: 150, marginTop: 10 }}>
                    <Text style={{ color: '#159AB3', fontSize: 15, }}>Video consultation</Text>
                  </View>




                </View>


              </View>


            </View>



            <Icon name="heart" type="AntDesign" style={{ color: '#FA5343', marginTop: 3.5, fontSize: 20, }} />




          </View>
        </TouchableOpacity>













      </View>

    )
  }
}

const styles = StyleSheet.create({

  active_button: {
    width: '98%',
    height: 45,
    borderBottomColor: '#8F49DE',
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',

  },

  in_active_button: {
    width: '98%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active_text: {
    color: '#8F49DE',
    fontSize: 14,
    fontWeight: 'bold'
  },

  in_active_text: {
    color: '#82829B',
    fontSize: 14,
    fontWeight: '800'


  },
  text1: {
    color: 'black', fontSize: 12, fontWeight: '400', marginTop: 5,
  },
  text: {
    color: 'white', fontSize: 12, fontWeight: '400', marginTop: 5
  },
  view1: {
    width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
  },
  view: {
    width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8F49DE'
  },

  checked: {
    width: 17, height: 17, backgroundColor: '#8F49DE', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
  },



})

export default testing;
