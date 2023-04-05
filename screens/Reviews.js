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
import StarRating from 'react-native-star-rating';

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
                        <Text style={{ fontWeight: '500', fontSize: 20, width: '60%', }}>Reviews</Text>
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



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', }}>

                        <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 15, color: '#2E2E37' }}>Ratings & reviews</Text>




                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Icon name="star" type="Entypo" style={{ color: "#F5C518", fontSize: 16 }} />


                            <Text style={{ color: '#F5C518', fontSize: 13, fontWeight: 'bold' }}>4.5/5</Text>



                        </View>



                    </View>







                    <View style={{ justifyContent: 'space-between', marginTop: 10, width: width / 1.1, alignSelf: 'center', paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../assets/Vector-2.png")} style={{ width: 41, borderRadius: 41, height: 41 }} />



                            {/* <ImageLoad
                                    style={{ width: 44, borderRadius: 44, height: 44 }}
                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                    source={{ uri: profile }}
                                    borderRadius={150}
                                    placeholderStyle={{ width: 44, borderRadius: 44, height: 44 }}
                                /> */}
                            <View style={{ marginLeft: 10, width: '60%' }}>
                                <Text numberOfLines={1} style={{ color: 'black', fontWeight: '500', fontSize: 14, maxWidth: '100%' }}>John Jeffrey</Text>
                                <Text numberOfLines={2} style={{ color: 'gray', fontSize: 13, maxWidth: '100%' }}>2 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4.4}
                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                containerStyle={{ width: width / 2.8 }}
                                starSize={18}
                                fullStarColor={'#F5C518'}
                            />

                        </View>

                        <Text style={{ color: '#2E2E37', fontSize: 14, fontWeight: '500', marginVertical: 5 }} numberOfLines={1} ellipsizeMode="tail">Visited for artery blockages</Text>

                        <Text style={{ color: '#82829B', fontWeight: '400', fontSize: 13 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                    </View>







                    <View style={{ justifyContent: 'space-between', marginTop: 10, width: width / 1.1, alignSelf: 'center', paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../assets/Vector-2.png")} style={{ width: 41, borderRadius: 41, height: 41 }} />



                            {/* <ImageLoad
                                    style={{ width: 44, borderRadius: 44, height: 44 }}
                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                    source={{ uri: profile }}
                                    borderRadius={150}
                                    placeholderStyle={{ width: 44, borderRadius: 44, height: 44 }}
                                /> */}
                            <View style={{ marginLeft: 10, width: '60%' }}>
                                <Text numberOfLines={1} style={{ color: 'black', fontWeight: '500', fontSize: 14, maxWidth: '100%' }}>John Jeffrey</Text>
                                <Text numberOfLines={2} style={{ color: 'gray', fontSize: 13, maxWidth: '100%' }}>2 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4.4}
                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                containerStyle={{ width: width / 2.8 }}
                                starSize={18}
                                fullStarColor={'#F5C518'}
                            />

                        </View>

                        <Text style={{ color: '#2E2E37', fontSize: 14, fontWeight: '500', marginVertical: 5 }} numberOfLines={1} ellipsizeMode="tail">Visited for artery blockages</Text>

                        <Text style={{ color: '#82829B', fontWeight: '400', fontSize: 13 }}>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                    </View>








                    <View style={{ justifyContent: 'space-between', marginTop: 10, width: width / 1.1, alignSelf: 'center', paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../assets/Vector-2.png")} style={{ width: 41, borderRadius: 41, height: 41 }} />



                            {/* <ImageLoad
                                    style={{ width: 44, borderRadius: 44, height: 44 }}
                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                    source={{ uri: profile }}
                                    borderRadius={150}
                                    placeholderStyle={{ width: 44, borderRadius: 44, height: 44 }}
                                /> */}
                            <View style={{ marginLeft: 10, width: '60%' }}>
                                <Text numberOfLines={1} style={{ color: 'black', fontWeight: '500', fontSize: 14, maxWidth: '100%' }}>John Jeffrey</Text>
                                <Text numberOfLines={2} style={{ color: 'gray', fontSize: 13, maxWidth: '100%' }}>2 months ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4.4}
                                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                containerStyle={{ width: width / 2.8 }}
                                starSize={18}
                                fullStarColor={'#F5C518'}
                            />

                        </View>

                        <Text style={{ color: '#2E2E37', fontSize: 14, fontWeight: '500', marginVertical: 5 }} numberOfLines={1} ellipsizeMode="tail">Visited for artery blockages</Text>

                        <Text style={{ color: '#82829B', fontWeight: '400', fontSize: 13 }}>Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
                    </View>














                </ScrollView>
            </View>

        )
    }
}


export default testing;
