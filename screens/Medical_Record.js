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
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Medical records</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
          </Text>

        </View>





        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{ backgroundColor: '#EEEEF6', flexDirection: 'row', alignItems: 'center', marginHorizontal: 4, marginVertical: 15, marginLeft: 10, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>
              <Icon name="filter" type="Ionicons" style={{ color: "gray", fontSize: 16, marginRight: 10 }} />

              <Text>Filters</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>In-Clinic</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>Video Consult</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>For-Myself</Text>
            </View>

          </ScrollView>
        </View>


        <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: 10, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


          <Icon name="bell" type="MaterialCommunityIcons" style={{ color: "#8F49DE", fontSize: 23, }} />

          <Text style={{ fontSize: 16, width: '80%' }}>My prescriptions</Text>


          <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 20, }} />

        </View>







        <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


          <Icon name="credit-card" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

          <Text style={{ fontSize: 16, width: '80%' }}>My test results</Text>


          <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 20, }} />

        </View>








        <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


          <Icon name="credit-card" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

          <Text style={{ fontSize: 16, width: '80%' }}>Other medical records</Text>


          <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 20, }} />

        </View>








        <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


          <Icon name="credit-card" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

          <Text style={{ fontSize: 16, width: '80%' }}>My diagnosis</Text>


          <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 20, }} />

        </View>




        <View
          style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 330 }}>
          <Icon name="plus" type="Entypo" style={{ color: 'white', marginRight: 3.5, fontSize: 20, }} />

          <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Add a record</Text>
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