import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StyleSheet,
    BackHandler
} from 'react-native';
import { Actions, Lightbox } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Pills extends React.Component {
    constructor(props) {

        super(props)

        this.state = {

            text1: 1,
            text2: 1,
            text3: 1,
            //   text4:1,
            check_design: 'pending',


            text4: 1,
            text5: 1,
            text6: 1,
            text7: 1,
            text8: 1,
            text9: 1,
            text10: 1,
            text0: 2,

            visible: false,
            data1: [],
            skalton: false,
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    onButtonPress = () => {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
        // then navigate
        navigate("NewScreen");
    };
    handleBackButtonClick() {
        if (this.props.user == true) {
            Actions.pop()

        }
        else {
            BackHandler.exitApp();

        }
        return true;
    }


    changebtn(value, val) {
        this.setState({
            check_design: val,

        })

        if (this.state[value] == 2) {



            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text0: 1,



                [value]: 2,


            })
        }
        else {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text0: 1,

                [value]: 2,




            })

        }
        setTimeout(() => {
            // this.get_appointments_user()

        }, 100);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>





                <View style={{ paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center', paddingVertical: 13, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#EEEEF6' }}>
                    <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '500', fontSize: 20, }}>My orders</Text>
                            <Text style={{ fontWeight: '500', fontSize: 20, }}>     </Text>

                        </View>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>



                        <View style={{ paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', height: 50, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>

                            <TouchableOpacity style={{ width: width / 4, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
                                <View style={(this.state.text0 == 1 ? styles.in_active_button : styles.active_button)}>
                                    <Text style={(this.state.text0 == 1 ? styles.in_active_text : styles.active_text)}>Pending</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: width / 4, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text1", 'active')}  >
                                <View style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)}>
                                    <Text style={(this.state.text1 == 1 ? styles.in_active_text : styles.active_text)}>Dispatched</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: width / 4, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text2", 'complete')}  >
                                <View style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)}>
                                    <Text style={(this.state.text2 == 1 ? styles.in_active_text : styles.active_text)}>Delivered</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{ width: width / 4, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text3", 'cancel')}  >
                                <View style={(this.state.text3 == 1 ? styles.in_active_button : styles.active_button)}>
                                    <Text style={(this.state.text3 == 1 ? styles.in_active_text : styles.active_text)}>Cancelled</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>

                <TouchableOpacity activeOpacity={0.8}

                    // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                    style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 9, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10, }}>
                    <View style={{ shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 5, }}>
                            <View >

                                <Image style={{
                                    width: 70, height: 70, borderRadius: 60, alignSelf: 'center'

                                }} source={require('../assets/order.png')} />








                            </View>
                            <View style={{ marginLeft: 10, width: '77%', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                    <View>

                                        <Text style={{ color: '#8F49DE', fontSize: 12, fontWeight: 'bold' }}>Feb 5, 2022, 7:30 PM (Pending) </Text>



                                        <Text style={{ color: '#2E2E37', fontSize: 15, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Pharmacy Hamdallaye</Text>
                                        <Text style={{ color: '#2E2E37', fontSize: 13, fontWeight: '400' }}>2020, Manhattan street, NY</Text>




                                    </View>


                                </View>

                            </View>
                        </View>
                        <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '700', marginTop: 5 }}>Benylin: All In One® Cold & Flu Caplets</Text>
                        <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '400' }}>24 Caplets</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 5 }}>
                            <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '400' }}>Quantity: 02 </Text>
                            <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '700' }}>100000 GNF</Text>


                        </View>


                        <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '700' }}>Benylin: All In One® Cold & Flu Caplets</Text>
                        <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '400' }}>24 Caplets</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '400' }}>Quantity: 02 </Text>
                            <Text style={{ color: '#2E2E37', fontSize: 12, fontWeight: '700' }}>100000 GNF</Text>


                        </View>



                        <View activeOpacity={0.8}
                            style={{ paddingHorizontal: 10, marginTop: 5, paddingVertical: 2, backgroundColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: 90, height: 22, alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>View details</Text>
                        </View>


                    </View>












                </TouchableOpacity>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    active_button: {
        width: '98%',
        height: 45,
        borderBottomColor: '#8F49DE',
        borderBottomWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',

    },

    in_active_button: {
        width: '98%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },

    active_text: {
        color: '#8F49DE',
        fontSize: 14,
        fontWeight: 'bold'
    },

    in_active_text: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'


    },
    text1: {
        color: 'black', fontSize: 12, fontWeight: '400', marginTop: 5,
    },
    text: {
        color: 'white', fontSize: 12, fontWeight: '400', marginTop: 5
    },
    view1: {
        width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
    },
    view: {
        width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8F49DE'
    }

})



export default Pills;
