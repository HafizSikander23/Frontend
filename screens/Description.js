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
            <Text style={{ fontWeight: '500', fontSize: 20, width: '70%', }}>Description</Text>
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

          <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 20, marginTop: 20, color: '#2E2E37' }}>Description</Text>

          <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 10 }}>
            <Text numberOfLines={5} style={{ fontSize: 14, color: '#60606C', }}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate ation incididunt aliquip deserunt reprehenderit elit laborum exerct.
            </Text>


            <Text numberOfLines={7} style={{ fontSize: 14, color: '#60606C', marginTop: 9 }}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </Text>


            <Text numberOfLines={4} style={{ fontSize: 14, color: '#60606C', marginTop: 9 }}>
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
            </Text>



          </View>

















        </ScrollView>
      </View>

    )
  }
}


export default testing;
