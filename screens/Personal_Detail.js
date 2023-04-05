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


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>


            <Text style={{ fontWeight: 'bold', fontSize: 18, fontWeight: '500' }}>Personal and Contact Details</Text>
            <Text>    </Text>
          </View>

        </View>

        <ScrollView>
          <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 15, marginTop: 10 }}>We'd be love to meet the team! </Text>
          <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 15, marginTop: 5 }}>Tell us a little bit about them</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginLeft: 15, marginTop: 8 }}>We'll need this info to create their public Labtani profiles
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginLeft: 15, }}>You can add up to 14 providers
            Typography</Text>






          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Prefix</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Dr" placeholderTextColor='gray' />

          </View>




          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>First Name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter Doctor First Name" placeholderTextColor='gray' />

          </View>



          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Last name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter Doctor last name" placeholderTextColor='gray' />

          </View>



          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Phone number</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter Doctor phone number" placeholderTextColor='gray' />

          </View>




          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Brthdate</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select Doctor BirthDate" placeholderTextColor='gray' />

          </View>




          <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Email</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter Doctor email" placeholderTextColor='gray' />

          </View>





          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>City</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select doctor city" placeholderTextColor='gray' />

          </View>




          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Gender</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Female" placeholderTextColor='gray' />

          </View>





          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Doctor Commission </Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="40%" placeholderTextColor='gray' />

          </View>


          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 40 }} >What types of bookings do you want this doctor receive?</Text>


          <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  In person visits-only</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Video Only</Text>

            </View>





            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Both video and in-person visits</Text>

            </View>





          </View>












          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 18, marginTop: 20 }}>What's this provider's role at the practice?</Text>

          <Text style={{ fontSize: 12, fontWeight: '300', marginLeft: 20, marginTop: 4 }}>This determines whether they'll have a public-facing profile on Labtani</Text>
          <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '45%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Full time Practitioner </Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Contractors</Text>

            </View>





            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Consultant</Text>

            </View>



            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Nurse Practitioner</Text>

            </View>



            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '400', color: 'black', }}>  Resident/Fellow</Text>

            </View>






          </View>

          <View style={{ flexDirection: 'row', paddingTop: 50, marginLeft: 15, }}>
            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}

            />

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, flexWrap: 'wrap', width: width / 1.1, alignSelf: 'flex-start' }}>
              <Text allowFontScaling={false} style={{ color: '#82829B', }}>By signing up you agree to our</Text>
              <Text allowFontScaling={false} style={{ color: '#2E2E37', }}> {terms} </Text>
              <Text allowFontScaling={false} style={{ color: '#82829B', }}> and </Text>

              <Text allowFontScaling={false} style={{ color: '#235fa9', }}> {privacy}</Text>


            </View>
          </View>






          <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Doctor_Hours()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 15, }}>Save</Text>
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
