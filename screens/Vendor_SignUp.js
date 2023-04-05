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
      profile: null




    }
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>
          <Text style={{ fontWeight: '500', fontSize: 20, marginLeft: 8 }}>Signup</Text>

        </View>





        <ScrollView>



          <View style={{ marginTop: 13, width: 150, height: 150, alignSelf: 'center' }}>



            <Image style={{ width: 150, height: 150, borderRadius: 150 }}
              source={require('../assets/Portrait_Placeholder.png')} />



            <TouchableOpacity onPress={() => this.RBSheet1.open()} style={{ width: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#246BFD', position: 'absolute', bottom: 0, right: 0 }}>
              <Icon name="edit" type="Entypo" style={{ color: "white", fontSize: 20 }} />
            </TouchableOpacity>
          </View>



          <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>First Name</Text>
            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your name" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Last Name</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your name" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Phone Number</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your phonr number" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Select Country</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select Country" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Email</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your email" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Password</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your password" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>


          <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Confirm Password</Text>

            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Comfirm your password" placeholderTextColor='gray' />
            {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

          </View>

          <View style={{ flexDirection: 'row', paddingTop: 50, marginLeft: 30, }}>
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






          <TouchableOpacity onPress={() => Actions.Verification_Screen()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 40, borderRadius: 8 }}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Signup</Text>
          </TouchableOpacity>







          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, marginBottom: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: "center", fontSize: 14, fontWeight: '500' }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => Actions.Vendor_Login()}>
              <Text style={{ color: '#9B56EC', fontSize: 16, fontWeight: 'bold' }}> Login</Text>

            </TouchableOpacity>
          </View>













        </ScrollView>

      </View>

    )
  }
}


export default testing;
