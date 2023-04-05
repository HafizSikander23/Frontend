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
            <Text style={{ fontWeight: '500', fontSize: 20, }}>Edit Profile</Text>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>     </Text>

          </View>
        </View>


        <View style={{ paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', height: 50, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5, backgroundColor: '#EEEEF6' }}>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.active_button}>
              <Text style={styles.active_text}>Personal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.in_active_button}>
              <Text style={styles.in_active_text}>Medical</Text>
            </View>
          </TouchableOpacity>


        </View>















        <ScrollView>

          <View style={{ marginTop: 13, width: 90, height: 90, alignSelf: 'center' }}>



            <Image style={{ width: 90, height: 90, borderRadius: 90 }}
              source={require('../assets/jane.png')} />



            <TouchableOpacity onPress={() => this.RBSheet1.open()} style={{ width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#067A91', position: 'absolute', bottom: 0, right: 0 }}>
              <Icon name="edit" type="Entypo" style={{ color: "white", fontSize: 15 }} />
            </TouchableOpacity>
          </View>










          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Jane Doe" placeholderTextColor='gray' />

          </View>

          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 15, marginTop: 30 }}>Contact</Text>

          <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', }}>

            {/* <View style={{width:'25%',alignItems:'center', justifyContent:'center'}}> */}

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '25%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+212" placeholderTextColor='gray' />


            {/* </View> */}


            {/* <View style={{width:'72%',justifyContent:'center',alignItems:'center',paddingTop:35}}>  */}
            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '70%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="9876543210" placeholderTextColor='gray' />


            {/* </View> */}


          </View>










          <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Email</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="johndoe7@gmail.com" placeholderTextColor='gray' />

          </View>




          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Relationship</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', fontWeight: 'bold', }} placeholder="Mother" placeholderTextColor='gray' />
          </View>



          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 18, marginTop: 30 }}>Gender</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', width: width / 1.1, marginTop: 10, alignSelf: 'center' }}>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#235fa9', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Male</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#235fa9', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Female</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#235fa9', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text3 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Other</Text>

            </View>

          </View>









          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 15, marginTop: 15 }}>Date of Birth</Text>

          <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', }}>


            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '43%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="March" placeholderTextColor='gray' />




            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '27%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="12" placeholderTextColor='gray' />



            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '23%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="1959" placeholderTextColor='gray' />


          </View>






          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 18, marginTop: 30 }}>Martial Status</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', width: width / 1.1, marginTop: 10, alignSelf: 'center' }}>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#235fa9', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Single</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#235fa9', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Married</Text>

            </View>



          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Height</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', fontWeight: 'bold', }} placeholder="145" placeholderTextColor='gray' />
            <Text style={{ color: '#8F49DE', fontSize: 15, position: 'absolute', right: 10, bottom: -2 }}>Cm</Text>
          </View>



          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Weight</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', fontWeight: 'bold', }} placeholder="56" placeholderTextColor='gray' />
            <Text style={{ color: '#8F49DE', fontSize: 15, position: 'absolute', right: 10, bottom: -2 }}>Kg</Text>
          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Emergency Contact name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Jane Doe" placeholderTextColor='gray' />

          </View>


          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 15, marginTop: 30 }}>Emergency Contact number</Text>

          <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', }}>

            {/* <View style={{width:'25%',alignItems:'center', justifyContent:'center'}}> */}

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '25%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+212" placeholderTextColor='gray' />


            {/* </View> */}


            {/* <View style={{width:'72%',justifyContent:'center',alignItems:'center',paddingTop:35}}>  */}
            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '70%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="9876543210" placeholderTextColor='gray' />


            {/* </View> */}


          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Location</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Add location" placeholderTextColor='gray' />

          </View>



          <View style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 55 }}>
            <Text style={{ color: 'white', fontSize: 15, }}>Save changes</Text>
          </View>


        </ScrollView>
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
