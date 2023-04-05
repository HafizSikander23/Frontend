
import { Row } from 'native-base';
import React, { Component } from 'react';
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
    ImageBackground,
    Pressable,
    Dimensions,
    BackHandler,
    AsyncStorage
} from 'react-native';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import Connection from "../connection";
// import { connect } from "react-redux";
import ImageLoad from 'react-native-image-placeholder';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import RBSheet from "react-native-raw-bottom-sheet";
import { NavigationEvents } from 'react-navigation';
// import Toast from 'react-native-simple-toast';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Patient_All_Appointment extends React.Component {

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



    backAction = () => {
        // BackHandler.exitApp()
        Actions.Patient_Tab_Screen()
        return true;
    };


    componentWillUnmount() {
        this.backHandler.remove();
    }



    componentDidMount = async () => {

        var today = new Date();

        var nextweek_T = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        let date0 = nextweek_T.toString()
        let ddd = date0.split(' ')
        let day_1 = ddd[0]
        let dd_2 = ddd[1]
        let dd_3 = ddd[2]
        let dd_4 = ddd[3]


        let final_date_1 = dd_2 + ' ' + dd_3 + ', ' + dd_4


        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        let date1 = nextweek.toString()
        let ccc = date1.split(' ')
        let day_2 = ccc[0]
        let cc_2 = ccc[1]
        let cc_3 = ccc[2]
        let cc_4 = ccc[3]


        let final_date_2 = cc_2 + ' ' + cc_3 + ', ' + cc_4


        var nextweek1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
        let date2 = nextweek1.toString()
        let eee = date2.split(' ')
        let day_3 = eee[0]
        let ee_2 = eee[1]
        let ee_3 = eee[2]
        let ee_4 = eee[3]


        let final_date_3 = ee_2 + ' ' + ee_3 + ', ' + ee_4


        var nextweek2 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
        let date3 = nextweek2.toString()
        let fff = date3.split(' ')
        let day_4 = fff[0]
        let ff_2 = fff[1]
        let ff_3 = fff[2]
        let ff_4 = fff[3]


        let final_date_4 = ff_2 + ' ' + ff_3 + ', ' + ff_4


        var nextweek3 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4);
        let date4 = nextweek3.toString()
        let ggg = date4.split(' ')
        let day_5 = ggg[0]
        let gg_2 = ggg[1]
        let gg_3 = ggg[2]
        let gg_4 = ggg[3]


        let final_date_5 = gg_2 + ' ' + gg_3 + ', ' + gg_4


        var nextweek4 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
        let date5 = nextweek4.toString()
        let hhh = date5.split(' ')
        let day_6 = hhh[0]
        let hh_2 = hhh[1]
        let hh_3 = hhh[2]
        let hh_4 = hhh[3]


        let final_date_6 = hh_2 + ' ' + hh_3 + ', ' + hh_4


        var nextweek5 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);
        let date6 = nextweek5.toString()
        let iii = date6.split(' ')
        let day_7 = iii[0]
        let ii_2 = iii[1]
        let ii_3 = iii[2]
        let ii_4 = iii[3]


        let final_date_7 = ii_2 + ' ' + ii_3 + ', ' + ii_4





        this.setState({
            day_1: day_1,
            day_2: day_2,
            day_3: day_3,
            day_4: day_4,
            day_5: day_5,
            day_6: day_6,
            day_7: day_7,
            date_1: final_date_1,
            date_2: final_date_2,
            date_3: final_date_3,
            date_4: final_date_4,
            date_5: final_date_5,
            date_6: final_date_6,
            date_7: final_date_7,

            date_1_1: dd_3,
            date_2_2: cc_3,
            date_3_3: ee_3,
            date_4_4: ff_3,
            date_5_5: gg_3,
            date_6_6: hh_3,
            date_7_7: ii_3,


            m1: cc_2,
            m2: dd_2,
            m3: ee_2,
            m4: ff_2,
            m5: gg_2,
            m6: hh_2,
            m7: ii_2,

            appointment_date: final_date_1,




        })




        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

        let user = await AsyncStorage.getItem('customer');
        let parsed = JSON.parse(user);
        let id = parsed[0].id;
        this.setState({

            id: id,



        })
        console.log('kkkkkkkkkkkk', this.state.id)
        // this.get_appointments_user()

    }






    get_appointments_user = () => {

        let uploaddata = new FormData();

        this.setState({
            skalton: true
        })

        uploaddata.append("user_id", this.state.id);


        let api = Connection + "rest_apis.php?action=display_appointments_user_1";
        console.log("pass => ", api);
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                otherHeader: "foo",
            },
            body: uploaddata,

        })
            .then((response) => response.json())
            .then((response) => {

                let record4 = response.response
                console.log('reeeeeeeee', record4)
                if (record4 != 'fail') {

                    this.setState({
                        data1: record4,
                        skalton: false
                    })


                } else {
                    this.setState({
                        data1: "",
                        skalton: false,
                    })

                }
            })
            .catch((error) => {
                console.error(error);
            });

    };

    toast = () => {
        Toast.show('You already submitted review for this appointment.')
    }




    createtable1 = () => {
        let table = []
        let record1 = this.state.data1
        let len = record1.length
        if (record1 != 'fail') {
            for (let i = 0; i < len; i++) {

                let date = record1[i].date
                let doctor_name = record1[i].doctor_name
                let user_name = record1[i].user_name
                let doctor_address = record1[i].doctor_address
                let doctor_experience = record1[i].doctor_experience
                let doctor_degree = record1[i].doctor_degree
                let doc_mobile = record1[i].doc_mobile
                let category = record1[i].category
                let appointment_id = record1[i].id
                let doctor_id = record1[i].doctor_id
                let day = record1[i].day
                let fcm_token = record1[i].doc_fcm_token
                let fee = record1[i].fee
                let type = record1[i].type
                let time = record1[i].time
                let status = record1[i].status
                let payment_method = record1[i].payment_method
                let r_name = record1[i].r_name
                let r_age = record1[i].r_age
                let r_gender = record1[i].r_gender
                let refund = record1[i].refund
                let cancel_reason = record1[i].cancel_reason
                let note = record1[i].note
                console.log(type)

                let degree = record1[i].doctor_degree
                let relation = record1[i].relation
                let perscription = record1[i].perscription
                let review = record1[i].review
                let app_rating = record1[i].rating
                let comment = record1[i].comment
                let perscription1 = Connection + 'perscription/' + perscription
                let profile1 = record1[i].doctor_profile
                let profile = Connection + 'images/' + profile1
                table.push(<View>
                    {
                        <View>
                            {this.state.check_design == status ?

                                <View>

                                    {status == 'pending' &&







                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => Actions.patient_site_appointment_detai({ type_1: type, refund: refund, cancel_reason: cancel_reason, relation: relation, r_gender: r_gender, r_age: r_age, r_name: r_name, comment: comment, app_rating: app_rating, note: note, doc_mobile: doc_mobile, payment_method: payment_method, date: date, status: status, day: day, time: time, doctor_name: doctor_name, category: category, doctor_address: doctor_address, doctor_profile: profile, fee: fee, patient_name: user_name, perscription1: perscription1, perscription: perscription, doctor_experience: doctor_experience, appointment_id: appointment_id, app_type: type, s_currency: this.state.s_currency, doctor_id: doctor_id, fcm_token: fcm_token })}
                                            style={{ backgroundColor: 'white', width: width / 1.1, marginBottom: 10, alignSelf: 'center', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                                <ImageLoad
                                                    style={{ width: 50, height: 50, borderRadius: 8 }}
                                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                                    source={{ uri: profile }}
                                                    borderRadius={8}
                                                    placeholderStyle={{ width: 50, height: 50, borderRadius: 8 }}


                                                />
                                                <View style={{ marginLeft: 10, width: '70%' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Dr. {doctor_name}</Text>
                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{category}</Text>
                                                </View>
                                                <Text style={{ color: 'orange', fontSize: 12, fontWeight: 'bold' }}>Active</Text>
                                            </View>

                                            <View style={{ width: '100%', backgroundColor: 'lightgray', height: 1, marginVertical: 15 }}></View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center', borderRadius: 8, }}>



                                                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}> {day}, {date} {time}</Text>


                                                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>

                                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>View Details</Text>

                                                </View>
                                            </View>



                                        </TouchableOpacity>












                                    }


                                    {status == 'complete' &&


                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => Actions.patient_site_appointment_detai({ type_1: type, refund: refund, cancel_reason: cancel_reason, relation: relation, r_gender: r_gender, r_age: r_age, r_name: r_name, comment: comment, app_rating: app_rating, note: note, doc_mobile: doc_mobile, payment_method: payment_method, date: date, status: status, day: day, time: time, doctor_name: doctor_name, category: category, doctor_address: doctor_address, doctor_profile: profile, fee: fee, patient_name: user_name, perscription1: perscription1, perscription: perscription, doctor_experience: doctor_experience, appointment_id: appointment_id, app_type: type, s_currency: this.state.s_currency, doctor_id: doctor_id, fcm_token: fcm_token })}
                                            style={{ backgroundColor: 'white', width: width / 1.1, marginBottom: 10, alignSelf: 'center', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                                <ImageLoad
                                                    style={{ width: 50, height: 50, borderRadius: 8 }}
                                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                                    source={{ uri: profile }}
                                                    borderRadius={8}
                                                    placeholderStyle={{ width: 50, height: 50, borderRadius: 8 }}


                                                />
                                                <View style={{ marginLeft: 10, width: '70%' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Dr. {doctor_name}</Text>
                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{category}</Text>
                                                </View>
                                                <Text style={{ color: 'green', fontSize: 12, fontWeight: 'bold' }}>Completed</Text>
                                            </View>

                                            <View style={{ width: '100%', backgroundColor: 'lightgray', height: 1, marginVertical: 15 }}></View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center', borderRadius: 8, }}>



                                                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}> {day}, {date} {time}</Text>


                                                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>

                                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>View Details</Text>

                                                </View>
                                            </View>



                                        </TouchableOpacity>








                                    }


                                    {status == 'cancel' &&


                                        <TouchableOpacity activeOpacity={1}
                                            onPress={() => Actions.patient_site_appointment_detai({ type_1: type, refund: refund, cancel_reason: cancel_reason, relation: relation, r_gender: r_gender, r_age: r_age, r_name: r_name, comment: comment, app_rating: app_rating, note: note, doc_mobile: doc_mobile, payment_method: payment_method, date: date, status: status, day: day, time: time, doctor_name: doctor_name, category: category, doctor_address: doctor_address, doctor_profile: profile, fee: fee, patient_name: user_name, perscription1: perscription1, perscription: perscription, doctor_experience: doctor_experience, appointment_id: appointment_id, app_type: type, s_currency: this.state.s_currency, doctor_id: doctor_id, fcm_token: fcm_token })}
                                            style={{ backgroundColor: 'white', width: width / 1.1, marginBottom: 10, alignSelf: 'center', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                                <ImageLoad
                                                    style={{ width: 50, height: 50, borderRadius: 8 }}
                                                    loadingStyle={{ size: 'large', color: 'blue' }}
                                                    source={{ uri: profile }}
                                                    borderRadius={8}
                                                    placeholderStyle={{ width: 50, height: 50, borderRadius: 8 }}


                                                />
                                                <View style={{ marginLeft: 10, width: '70%' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Dr. {doctor_name}</Text>
                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{category}</Text>
                                                </View>
                                                <Text style={{ color: 'red', fontSize: 12, fontWeight: 'bold' }}>Cancelled</Text>
                                            </View>

                                            <View style={{ width: '100%', backgroundColor: 'lightgray', height: 1, marginVertical: 15 }}></View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', alignSelf: 'center', borderRadius: 8, }}>



                                                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}> {day}, {date} {time}</Text>


                                                <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>

                                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>View Details</Text>

                                                </View>
                                            </View>



                                        </TouchableOpacity>





                                    }
                                </View>

                                :
                                <View>
                                </View>

                            }

                        </View>
                    }
                </View>
                )
            }
            return table
        }
        else {
            let img = []
            img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
                {
                    <View>

                    </View>
                }</View>)
            return img
        }
    }


    open = (val, val1, va3, val4, val5, val6) => {

        this.setState({
            appointment_id_cancel: val,
            doc_id_cancel: val1,
            fcm_token: va3,
            date: val4,
            time: val5,
            fee: val6

        })
        setTimeout(() => {
            this.RBSheet1.open()

        }, 100);
    }


    next = () => {
        this.RBSheet1.close()
        Actions.cancel_appointment({ fee: this.state.fee, time: this.state.time, date: this.state.date, appointment_id: this.state.appointment_id_cancel, doctor_id: this.state.doc_id_cancel, fcm_token: this.state.fcm_token })
    }

    dd = () => {
        // this.get_appointments_user()
    }




    changebtn2(value, value2, value3) {

        this.setState({
            changes_time_for_specific_day: value2,
            appointment_date: value3
        })



        if (this.state[value] == 2) {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text4: 1,
                text5: 1,
                text6: 1,
                text7: 1,
                text8: 1,
                text9: 1,


                [value]: 2,

                category: '',

            })
        }
        else {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text4: 1,
                text5: 1,
                text6: 1,
                text7: 1,
                text8: 1,
                text9: 1,

                [value]: 2,
                category: value2
            })
        }



        setTimeout(() => {
            // this.get_appointments_user()

        }, 100);

    }




    render() {


        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />

                <NavigationEvents onDidFocus={payload => this.dd()} />




                <View style={{ paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center', paddingVertical: 13, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#EEEEF6' }}>

                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>My orders</Text>


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








                {this.state.skalton == true ?


                    <SkeletonPlaceholder>
                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                height: 160,
                                borderRadius: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 5,
                                backgroundColor: 'white'
                            }}
                        ></View>

                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                height: 160,
                                borderRadius: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 15,
                                backgroundColor: "white",
                            }}
                        ></View>


                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                height: 160,
                                borderRadius: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 15,
                                backgroundColor: "white",
                            }}
                        ></View>



                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                height: 160,
                                borderRadius: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 15,
                                backgroundColor: "white",
                            }}
                        ></View>


                        <View
                            style={{
                                width: "90%",
                                alignSelf: "center",
                                height: 160,
                                borderRadius: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 15,
                                backgroundColor: "white",
                                marginBottom: 15
                            }}
                        ></View>

                    </SkeletonPlaceholder>


                    :


                    <ScrollView >










































                        {this.state.check_design == 'pending' &&




                            <TouchableOpacity activeOpacity={0.8}

                                // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                    <View>

                                        <Image style={{
                                            width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                        }} source={require('../assets/doc8.png')} />








                                    </View>
                                    <View style={{ marginLeft: 10, width: '77%', }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <Icon name="questioncircle" type="AntDesign" style={{ color: "#8F49DE", fontSize: 16 }} />


                                                    <Text style={{ color: '#8F49DE', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Pending) </Text>



                                                </View>
                                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                            </View>


                                        </View>



                                    </View>


                                </View>



                                <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                </View>



















                                <TouchableOpacity onPress={() => Actions.Vendor_Order_Detail()} style={{ width: 98, height: 20, backgroundColor: '#8F49DE', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                </TouchableOpacity>








                            </TouchableOpacity>




                        }
























































                        {this.state.check_design == 'active' &&

                            <View>


                                <TouchableOpacity activeOpacity={0.8}

                                    // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                    style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                    <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                        <View>

                                            <Image style={{
                                                width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                            }} source={require('../assets/doc8.png')} />








                                        </View>
                                        <View style={{ marginLeft: 10, width: '77%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                        <Icon name="questioncircle" type="AntDesign" style={{ color: "#8F49DE", fontSize: 16 }} />


                                                        <Text style={{ color: '#8F49DE', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Dispacthed) </Text>



                                                    </View>
                                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                                </View>


                                            </View>



                                        </View>


                                    </View>



                                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                    </View>



















                                    <View style={{ width: 98, height: 20, backgroundColor: '#8F49DE', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                    </View>








                                </TouchableOpacity>




                                <TouchableOpacity activeOpacity={0.8}

                                    // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                    style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                    <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                        <View>

                                            <Image style={{
                                                width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                            }} source={require('../assets/doc8.png')} />








                                        </View>
                                        <View style={{ marginLeft: 10, width: '77%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                        <Icon name="questioncircle" type="AntDesign" style={{ color: "#159AB3", fontSize: 16 }} />


                                                        <Text style={{ color: '#159AB3', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Dispacthed) </Text>



                                                    </View>
                                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                                </View>


                                            </View>



                                        </View>


                                    </View>



                                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                    </View>



















                                    <View style={{ width: 98, height: 20, backgroundColor: '#159AB3', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                    </View>








                                </TouchableOpacity>
                            </View>
                        }


















                        {this.state.check_design == 'complete' &&

                            <View>


                                <TouchableOpacity activeOpacity={0.8}

                                    // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                    style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                    <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                        <View>

                                            <Image style={{
                                                width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                            }} source={require('../assets/doc8.png')} />








                                        </View>
                                        <View style={{ marginLeft: 10, width: '77%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                        <Icon name="questioncircle" type="AntDesign" style={{ color: "#8F49DE", fontSize: 16 }} />


                                                        <Text style={{ color: '#8F49DE', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Delivered) </Text>



                                                    </View>
                                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                                </View>


                                            </View>



                                        </View>


                                    </View>



                                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                    </View>



















                                    <View style={{ width: 98, height: 20, backgroundColor: '#8F49DE', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                    </View>








                                </TouchableOpacity>




                                <TouchableOpacity activeOpacity={0.8}

                                    // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                    style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                    <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                        <View>

                                            <Image style={{
                                                width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                            }} source={require('../assets/doc8.png')} />








                                        </View>
                                        <View style={{ marginLeft: 10, width: '77%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                        <Icon name="questioncircle" type="AntDesign" style={{ color: "#159AB3", fontSize: 16 }} />


                                                        <Text style={{ color: '#159AB3', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Delivered) </Text>



                                                    </View>
                                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                                </View>


                                            </View>



                                        </View>


                                    </View>



                                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                    </View>



















                                    <View style={{ width: 98, height: 20, backgroundColor: '#159AB3', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                    </View>








                                </TouchableOpacity>
                            </View>
                        }






                        {this.state.check_design == 'cancel' &&


                            <TouchableOpacity activeOpacity={0.8}

                                // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

                                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 15, marginBottom: 10 }}>

                                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                                    <View>

                                        <Image style={{
                                            width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                                        }} source={require('../assets/doc8.png')} />








                                    </View>
                                    <View style={{ marginLeft: 10, width: '77%', }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <Icon name="questioncircle" type="AntDesign" style={{ color: "#D91F11", fontSize: 16 }} />


                                                    <Text style={{ color: '#D91F11', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Pending) </Text>



                                                </View>
                                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                                            </View>


                                        </View>



                                    </View>


                                </View>



                                <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Benylin: All In One® Cold & Flu Caplets </Text>

                                <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">24 Caplets</Text>




                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Quantity: 02</Text>
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '700', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">100000 GNF</Text>


                                </View>



















                                <View style={{ width: 98, height: 20, backgroundColor: '#8F49DE', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>View details</Text>
                                </View>








                            </TouchableOpacity>




                        }









                        {/*                   
                        {this.state.data1 == "" ?
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: height / 1.5 }}>
                                <Text style={{}}>
                                    You don't have any appointment.
                                </Text>
                            </View>
                            :
                            <View style={{ paddingBottom: 10 }}>
                                {this.createtable1()}


                            </View>
                        } */}
                    </ScrollView>
                }




                <RBSheet
                    ref={ref => {
                        this.RBSheet1 = ref;
                    }}
                    closeOnDragDown={true}
                    height={220}
                    openDuration={270}
                    customStyles={{
                        container: {
                            paddingHorizontal: 20,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                        },
                        draggableIcon: {
                            backgroundColor: "lightgray",
                        },
                    }}

                >
                    <View>
                        <Text style={{ fontSize: 18, color: 'red', marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>Cancel Appointment!</Text>

                        <View style={{ width: '100%', backgroundColor: 'lightgray', height: 1, marginVertical: 15 }}></View>
                        <Text style={{ fontSize: 14, color: 'gray', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 30 }}>Are you sure you want to cancel your appointment?</Text>
                        {/* <Text style={{ fontSize: 14, color: 'gray', marginTop: 10, textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 30 }}>{this.props.Only_funds_will_return_your_accouont}</Text> */}

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
                            <TouchableOpacity onPress={() => this.RBSheet1.close()} activeOpacity={0.8}
                                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#eef3ff', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3 }}>
                                <Text style={{ color: '#8F49DE', fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.next()} activeOpacity={0.8}
                                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#8F49DE', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Yes Cancel</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </RBSheet>


            </View>

        )
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




export default Patient_All_Appointment;