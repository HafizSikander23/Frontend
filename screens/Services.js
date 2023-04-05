import { Row } from 'native-base';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import { Icon, } from 'native-base';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


class testing extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '500', fontSize: 20, width: '60%', }}>Services</Text>
          </View>

        </View>



        <ScrollView>










          <TouchableOpacity activeOpacity={0.8}


            style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, paddingBottom: 15, borderBottomWidth: 1.5, borderBottomColor: 'lightgray' }}>

            <View>

              <Image style={{
                width: 60, height: 60, borderRadius: 60, alignSelf: 'center'

              }} source={require('../assets/f1.png')} />





            </View>
            <View style={{ marginLeft: 10, width: '77%', marginTop: 6 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                <View>


                  <Text style={{ color: 'black', fontSize: 15, fontWeight: '500', }}>Dr. Jane Fernandes Dcosta</Text>
                  <Text style={{ color: '#82829B', fontSize: 15, fontWeight: '500', marginTop: 5 }}>Cardiologist</Text>






                </View>


              </View>


            </View>
          </TouchableOpacity>

          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 20, marginTop: 20, color: '#2E2E37' }}>Services</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Congenital heart defects</Text>
          </View>






          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Coronary artery disease</Text>
          </View>







          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Heart failure</Text>
          </View>







          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Electrophysiology</Text>
          </View>










          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Valvular heart disease </Text>
          </View>











          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Congenital heart defects</Text>
          </View>








          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Coronary artery disease</Text>
          </View>










          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Heart failure</Text>
          </View>











          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Electrophysiology</Text>
          </View>











          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Valvular heart disease </Text>
          </View>












          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Congenital heart defects</Text>
          </View>










          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Coronary artery disease</Text>
          </View>









          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Heart failure</Text>
          </View>











          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Electrophysiology</Text>
          </View>













          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15, }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "#60606C", fontSize: 11, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Valvular heart disease </Text>
          </View>















        </ScrollView>
      </View>

    )
  }
}


export default testing;
