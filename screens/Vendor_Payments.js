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
              style={{ color: "black", fontSize: 20 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Payments</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
          </Text>

        </View>

        <View style={{ width: width / 1.1, alignSelf: 'center', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, marginTop: 10, paddingBottom: 15 }}>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>March</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 7 }}>Online consultation with Dr. Joseph Drake</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 6 }}>18 Oct, 2021</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
            <Text style={{ fontSize: 11, fontWeight: '500' }}>#ID438998443930</Text>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#19B46E' }}>$1520</Text>
          </View>
        </View>




        <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 10, }}>

          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 7 }}>Online consultation with Dr. Kate Jackson D...</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 6 }}>18 Oct, 2021</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
            <Text style={{ fontSize: 11, fontWeight: '500' }}>#ID438998443930</Text>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#19B46E' }}>$1520</Text>
          </View>

        </View>

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