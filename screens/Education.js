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
      <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 40 }}>

        <StatusBar backgroundColor="white" barStyle="light-content" />


        <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', fontSize: 19, fontWeight: '600', marginLeft: 10 }}>Education and Specialization</Text>
        </View>






        <Text style={{ fontWeight: 'bold', fontSize: 15, fontWeight: '500', marginLeft: 20, marginTop: 50 }}>Education</Text>







        <View style={{ width: width / 1.1, marginTop: 15, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 13, fontWeight: '600' }}>Qualification</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select or add title" placeholderTextColor='gray' />

        </View>





        <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 13, fontWeight: '600' }}>College/Institute</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select or add title" placeholderTextColor='gray' />

        </View>





        <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 13, fontWeight: '600' }}>Year of completion</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select" placeholderTextColor='gray' />

        </View>


        <View
          style={{ backgroundColor: 'white', width: width / 1.1, height: 40, flexDirection: 'row', marginTop: 10, alignSelf: 'center', alignItems: 'center', borderRadius: 8, }}>
          <Icon name="plus" type="Entypo" style={{ color: '#3085F4', marginRight: 3.5, fontSize: 18, }} />

          <Text style={{ color: '#3085F4', fontSize: 13, fontWeight: '600' }}>Add Education</Text>
        </View>




        <Text style={{ fontWeight: 'bold', fontSize: 14, fontWeight: '600', marginLeft: 20, marginTop: 10 }}>Specialization</Text>

        <View style={{ width: width / 1.1, marginTop: 10, height: 50, alignSelf: 'center' }} >
          <Text style={{ fontSize: 13, fontWeight: '600' }}>Add Specialization</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 7, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+ Add a service" placeholderTextColor='gray' />

        </View>




        <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginTop: 20 }}>


          <View style={{ flexDirection: 'row', backgroundColor: '#EAF3FE' }}>
            <Text style={{ color: '#186ADE', fontSize: 13, fontWeight: '400', marginLeft: 14 }}>General Physician</Text>
            <Icon name="cross" type="Entypo" style={{ color: '#82829B', marginRight: 3.5, fontSize: 18, marginLeft: 10 }} />

          </View>



          <View style={{ flexDirection: 'row', backgroundColor: '#EAF3FE', marginLeft: 5 }}>
            <Text style={{ color: '#186ADE', fontSize: 13, fontWeight: '400', marginLeft: 14 }}>Allergist</Text>
            <Icon name="cross" type="Entypo" style={{ color: '#82829B', marginRight: 3.5, fontSize: 18, marginLeft: 10 }} />

          </View>




        </View>

        <View style={{ flexDirection: 'row', backgroundColor: '#EAF3FE', marginLeft: 18, width: 153, marginTop: 4 }}>
          <Text style={{ color: '#186ADE', fontSize: 13, fontWeight: '400', marginLeft: 14 }}>Dermatologist</Text>
          <Icon name="cross" type="Entypo" style={{ color: '#82829B', marginRight: 3.5, fontSize: 18, marginLeft: 10 }} />

        </View>






        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Registration()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 70, marginTop: 200 }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, }}>Save</Text>
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
