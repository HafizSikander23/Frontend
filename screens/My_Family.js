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
            <Text style={{ fontWeight: '500', fontSize: 20, }}>My Family</Text>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>     </Text>

          </View>
        </View>



        <TouchableOpacity activeOpacity={0.8}


          style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, borderBottomWidth: 1.5, paddingBottom: 23, borderBottomColor: 'lightgray' }}>

          <View>

            <Image style={{
              width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

            }} source={require('../assets/Mother.png')} />





          </View>
          <View style={{ marginLeft: 10, width: '77%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
              <View>


                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', }}>Jane Doe</Text>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', marginTop: 5 }}>Mother</Text>




                <View style={{ backgroundColor: 'white', height: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderColor: '#9B56EC', borderWidth: 1, width: 110, marginTop: 10 }}>
                  <Text style={{ color: '#9B56EC', fontSize: 15, }}>Edit details</Text>
                </View>




              </View>


            </View>


          </View>
        </TouchableOpacity>






        <TouchableOpacity activeOpacity={0.8}


          style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, paddingBottom: 23, }}>

          <View>

            <Image style={{
              width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

            }} source={require('../assets/Father.png')} />





          </View>
          <View style={{ marginLeft: 10, width: '77%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
              <View>


                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', }}>Jake Doe</Text>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', marginTop: 5 }}>Father</Text>




                <View style={{ backgroundColor: 'white', height: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderColor: '#9B56EC', borderWidth: 1, width: 110, marginTop: 10 }}>
                  <Text style={{ color: '#9B56EC', fontSize: 15, }}>Edit details</Text>
                </View>




              </View>


            </View>


          </View>
        </TouchableOpacity>










        <TouchableOpacity onPress={() => Actions.Add_Patient()}
          style={{ backgroundColor: '#EEEEF6', width: width / 1.1, height: 40, flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 20 }}>
          <Icon name="plus" type="Entypo" style={{ color: '#60606C', marginRight: 3.5, fontSize: 20, }} />

          <Text style={{ color: '#60606C', fontSize: 15, fontWeight: '600' }}>Add a patient</Text>
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
