import { Row } from "native-base";
import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Icon, Footer, FooterTab, Badge, Right, Picker, Left, Button } from 'native-base';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  AsyncStorage,
  ImageBackground,
  Dimensions,
  BackHandler,
  AppState,
  PermissionsAndroid
} from "react-native";
import { Actions } from "react-native-router-flux";
// import TouchID from 'react-native-touch-id';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
// import Connection from '../connection';
import { connect } from 'react-redux';
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogFooter,
  DialogButton,
  DialogTitle,
} from "react-native-popup-dialog";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



class Splash extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      touchhh: false,
      visible: false,
      spinner: true,
      text1: 1,
      text2: 2,
      // appState:AppState.currentState
    };
  }

  backAction = () => {
    // BackHandler.exitApp()
    Actions.pop()
    return true;
  };


  componentWillUnmount() {
    this.backHandler.remove();
  }





  componentDidMount = async () => {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }






  render() {
    return (


      <View style={{ flex: 1, backgroundColor: 'white' }}>


        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: "#EEEEF6",
          }}
        >
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon

              name="arrowleft"
              type="AntDesign"
              style={{ color: "black", fontSize: 25 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Referral</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
          </Text>

        </View>


        <ScrollView>

          <Text style={{ textAlign: 'center', marginTop: 8 }}>
            Invite a friend to the platform and you get
          </Text>


          <Text style={{ textAlign: 'center', }}>
            $5 when they book their first appointment.
          </Text>



          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e1.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>



          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e2.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>






          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e3.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>





          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e4.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>




          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e5.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>







          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e6.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>









          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e7.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>









          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e8.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>









          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e9.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>









          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>

            <Image style={{ width: 50, height: 50, borderRadius: 70, }} resizeMode="contain" source={require('../assets/e10.png')} />

            <View style={{ marginLeft: 10, width: '60%' }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>Lauralee Quintero</Text>
              <Text style={{ fontSize: 13, fontWeight: '300', marginRight: 20, marginTop: 5 }}>+1-300-555-0135</Text>
            </View>

            <View style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 8, backgroundColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 70, }}>
              <Text style={{ color: 'white' }}>Invite</Text>
            </View>

          </View>





        </ScrollView>




      </View>


    );
  }
}

const styles = StyleSheet.create({
  text1: {
    color: 'gray'
  },
  text: {
    color: 'white'
  },
  view1: {
    paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 10
  },
  view: {
    paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 10, backgroundColor: '#24C6D2',
  },
  unselect: {
    width: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: '#24C6D2', borderWidth: 1, marginLeft: 10, paddingVertical: 10,
  },
  select: {
    width: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#24C6D2', backgroundColor: '#24C6D2', marginLeft: 10, paddingVertical: 10,
  },
  unselect_text: {
    color: '#24C6D2', fontWeight: 'bold'

  },
  select_text: {
    color: 'white', fontWeight: 'bold'

  },
  select_text_red: {
    color: 'white', fontWeight: 'bold', fontSize: 15

  },
  unselect_text_red: {
    color: 'white', fontWeight: 'bold', fontSize: 15

  },
  select_red: {
    width: 130, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FFD242', marginLeft: 10, paddingVertical: 10,
  },
  unselect_red: {
    width: 130, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FFD242', marginLeft: 10, paddingVertical: 10,
  },
  checked: {
    width: 17, height: 17, backgroundColor: '#9B56EC', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
  },

})



export default Splash;