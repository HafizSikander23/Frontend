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
            Choose Payment Method</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
          </Text>

        </View>



        <TouchableOpacity activeOpacity={1} onPress={() => Actions.payment_done()}
          style={{ width: width / 1.1, marginTop: 20, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 20, backgroundColor: '#F7F2FC', borderColor: '#9B56EC', borderWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginLeft: 10 }}>Paypapl</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 12 }} resizeMode="contain" source={require('../assets/image22.png')} />
            </View>


          </View>
        </TouchableOpacity>




        <TouchableOpacity activeOpacity={1}
          style={{ width: width / 1.1, marginTop: 20, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 20, borderColor: 'white', borderWidth: 1, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 2, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>



            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#9B56EC', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginLeft: 10 }}>Card</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30, borderRadius: 12 }} resizeMode="contain" source={require('../assets/master.png')} />
            </View>
          </View>
        </TouchableOpacity>




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