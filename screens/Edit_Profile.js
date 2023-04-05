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


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>


            <Text style={{ fontWeight: 'bold', fontSize: 20, width: '65%', }}>Edit Profile</Text>
          </View>

        </View>

        <View style={{ marginTop: 13, width: 90, height: 90, alignSelf: 'center' }}>



          <Image style={{ width: 90, height: 90, borderRadius: 90 }}
            source={require('../assets/profile.png')} />



          <TouchableOpacity onPress={() => this.RBSheet1.open()} style={{ width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#067A91', position: 'absolute', bottom: 0, right: 0 }}>
            <Icon name="edit" type="Entypo" style={{ color: "white", fontSize: 15 }} />
          </TouchableOpacity>
        </View>


        <View style={{ width: width / 1.1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', backgroundColor: '#FFE0DE', height: 40, alignItems: 'center', marginTop: 30, paddingHorizontal: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Icon name="circle-o-notch" type="Fontisto" style={{ color: '#D91F11', marginTop: 3.5, fontSize: 20, }} />

            <Text style={{ color: '#D91F11', fontSize: 15, marginLeft: 5 }}>85% Completed</Text>
          </View>


          <Text style={{ color: '#D91F11', fontSize: 15, }}>COMPLETE PROFILE</Text>


        </View>









        <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Name</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="John Doe" placeholderTextColor='gray' />

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
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Password</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', fontWeight: 'bold', }} placeholder="*********" placeholderTextColor='gray' />
          <Text style={{ color: '#8F49DE', fontSize: 15, position: 'absolute', right: 10, bottom: -2 }}>CHANGE</Text>
        </View>

        <TouchableOpacity onPress={() => Actions.Personal_Detail()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 100 }}>
          <Text style={{ color: 'white', fontSize: 15, }}>Save changes</Text>
        </TouchableOpacity>





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
