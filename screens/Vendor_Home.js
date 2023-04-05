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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

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
      code: ""




    }
  }

  render() {
    const CELL_COUNT = 6;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="white" barStyle="light-content" />



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', flexDirection: 'row', paddingVertical: 10 }}>

          <View style={{ justifyContent: 'space-between', width: '60%', flexDirection: 'row', }}>

            <Image style={{ height: 40, width: 40, borderRadius: 1000 }} resizeMode='stretch'
              source={require('../assets/home1.png')} />
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 10, paddingTop: 8 }}>Hello, Cosa Pharmacy</Text>

          </View>



          <Icon name="bell" type="Feather" style={{ color: 'black', fontSize: 25, marginTop: 6 }} />



        </View>
        <ScrollView>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, marginTop: 10 }}>

            <Icon name="location-sharp" type="Ionicons" style={{ color: '#60606C', fontSize: 23, }} />

            <Text style={{ color: '#60606C', fontSize: 16, fontWeight: '600', marginLeft: 7 }}>Conakry, Guinea</Text>
            <Icon name="down" type="AntDesign" style={{ color: '#60606C', fontSize: 23, marginLeft: 7 }} />




          </View>


          <Image style={{ width: width / 1.1, height: height / 5, alignSelf: 'center', }}
            source={require('../assets/home.png')} />








          <Text style={{ fontSize: 18, marginTop: 10, fontWeight: '600', marginLeft: 20, marginTop: 15, }}>Dashboard</Text>




















































          <View style={{ width: width / 1.2, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <View style={{ width: '45%', height: 130, backgroundColor: '#003580', borderRadius: 13, justifyContent: 'center', alignItems: 'center', }}>

              <Icon name="calendar-clock" type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 50, }} />


              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', marginVertical: 5 }}>36</Text>


              <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', }}>Pending Order</Text>



            </View>






            <View style={{ width: '45%', height: 130, backgroundColor: '#FEBA02', borderRadius: 13, justifyContent: 'center', alignItems: 'center', }}>

              <Icon name="calendar-check" type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 50, }} />


              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', marginVertical: 5 }}>20</Text>


              <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', }}>Wait to delivery</Text>



            </View>











          </View>









          <View style={{ width: width / 1.2, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', borderRadius: 10, marginTop: 15 }}>






            <View style={{ width: '45%', height: 130, backgroundColor: '#3E9C35', borderRadius: 13, justifyContent: 'center', alignItems: 'center', }}>

              <Icon name="dollar" type="Foundation" style={{ color: 'white', fontSize: 65, }} />


              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', marginBottom: 5 }}>GNF 50000</Text>


              <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginBottom: 15 }}>Earnings</Text>



            </View>




            <View style={{ width: '45%', height: 130, backgroundColor: '#5182FF', borderRadius: 13, justifyContent: 'center', alignItems: 'center', }}>

              <Icon name="calendar-clock" type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 50, }} />


              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', marginVertical: 5 }}>30</Text>


              <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', }}>Completed</Text>



            </View>








          </View>

















          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', }}>Trending</Text>

            <Text style={{ color: '#246BFD', fontSize: 13, fontWeight: 'bold' }}>See All</Text>



          </View>


          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/* <View style={{justifyContent:'space-between',width:width/1.1,flexDirection:'row', alignSelf:'center', alignItems:'center'}}> */}
            <View style={{ width: width / 1.8, marginHorizontal: 10, paddingBottom: 15, marginBottom: 10, borderRadius: 4, marginTop: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: 'white' }}>
              <Image style={{ width: "100%", height: 150, }} source={require('../assets/istockphoto-1402004971-170667a.jpg')} />

              <Text style={{ fontSize: 16, marginTop: 10, fontWeight: '600', paddingHorizontal: 10 }} numberOfLines={2}>Adding Salt to Your Food May Increase Risk of Pre...</Text>

            </View>


            <View style={{ width: width / 1.8, marginHorizontal: 10, paddingBottom: 15, marginBottom: 10, borderRadius: 4, marginTop: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: 'white' }}>
              <Image style={{ width: "100%", height: 150, }} source={require('../assets/istockphoto-1402004971-170667a.jpg')} />

              <Text style={{ fontSize: 16, marginTop: 10, fontWeight: '600', paddingHorizontal: 10 }} numberOfLines={2}>Adding Salt to Your Food May Increase Risk of Pre...</Text>

            </View>




          </ScrollView>








        </ScrollView>
      </View>

    )
  }
}
const styles = StyleSheet.create({

  root: { paddingHorizontal: 30, alignSelf: 'center', marginTop: 30 },

  cell: {
    width: 45,
    height: 45,
    lineHeight: 42,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#EEEEF6',
    borderWidth: 1,
    borderColor: '#EEEEF6'
  },
  focusCell: {
    borderColor: '#007fff',
  },
})

export default testing;
