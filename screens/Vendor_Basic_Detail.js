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
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

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



  submit = () => {
    Actions.Vendor_Registration_6()
  }


  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flex: 1 }}>
          <View style={{ width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>


          </View>
          <ProgressSteps disabledStepNumColor='#186ADE' activeStepNumColor='#186ADE' activeStepIconBorderColor='#3085F4' activeStepIconColor='#D6E7FD' progressBarColor='#D6E7FD' completedStepIconColor='#3085F4' completedProgressBarColor='#D6E7FD' disabledStepIconColor='#D6E7FD' >


            <ProgressStep label="" nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>



              <ScrollView>

                <Text style={{ color: '#2E2E37', fontSize: 23, fontWeight: '600', textAlign: 'center', }}>Establishment basic details</Text>





                <View style={{ width: width / 1.1, marginTop: 10, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Establishment name</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder=" Select your establishment name" placeholderTextColor='gray' />

                </View>


                <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice website optional</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder=" Select your establishment name" placeholderTextColor='gray' />

                </View>




                <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice Phone number </Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+224" placeholderTextColor='gray' />

                </View>



                <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice Email</Text>
                  <Text style={{ fontSize: 13, color: 'gray' }}>We use this for administrative and scheduling purposes.</Text>


                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="" placeholderTextColor='gray' />

                </View>





                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 22, marginTop: 40 }}>How many practice do you have ?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Just one</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  2 and more</Text>

                  </View>



                </View>









                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 22, marginTop: 14 }}>Practice Type</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>




                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Laboratory

                    </Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Pharmacy </Text>

                  </View>






                </View>











              </ScrollView>
            </ProgressStep>











            <ProgressStep onSubmit={() => this.submit()} label="" previousBtnStyle={styles.previous_button} previousBtnTextStyle={styles.previous_text} nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>


              <ScrollView>

                <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, }}>
                  <Text style={{ color: 'black', marginBottom: 15, fontSize: 25, fontWeight: 'bold' }}>Establishment basic details</Text>
                  <Text style={{ fontSize: 18, color: 'black', width: '88%', fontWeight: '600', }} >Upload store image </Text>
                  <Text style={{ color: 'gray', marginTop: 8, fontSize: 14, }}>You can add up to 5 images</Text>


                </View>
                <View style={{ width: width / 1.05, height: height / 6, marginTop: 30, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                  <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
                  <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload store profile image</Text>

                </View>


                <Text style={{ fontSize: 15, fontWeight: '600', color: '#186ADE', marginLeft: 17, marginTop: 8 }}>Add Image</Text>



















              </ScrollView>





            </ProgressStep>
          </ProgressSteps>
        </View>











































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
  checked: {
    width: 17, height: 17, backgroundColor: '#8F49DE', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
  },
  next_button: {
    backgroundColor: '#9B56EC', width: width / 3.5, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 8,
  },
  next_text: {
    color: 'white',
    fontSize: 17,
  },
  previous_text: {
    color: '#3085F4', fontSize: 17,
  },
  previous_button: {
    backgroundColor: '#E9F0FF', width: width / 3.5, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 8, alignSelf: 'flex-start'
  },
})
export default testing;
