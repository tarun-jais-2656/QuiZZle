import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";

export const UserDetail=()=>{
    const navigation=useNavigation();
    const[name,setName]=useState("")
    return(
        <SafeAreaView style={styles.container}>
            <Image
            source={icons.calculator}
            style={styles.logo}
            />
            <View style={styles.view}>
                <Text style={styles.txt}>Let's Start</Text>
                <Text style={styles.txt}>Quiz</Text>
                <Text style={styles.txt1}>Welcome to QuiZZle, the place where</Text>
                <Text style={styles.txt1}>knowledge and fun meets! Test your insight</Text>
                <Text style={styles.txt1}>with Mathematical questions.</Text>
            </View>
            <Text style={styles.txt2}>Enter your name Please! </Text>
            <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text)=>setName(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home',{name})}>
                <Text style={styles.btnTxt}>Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#8ebcf5'
    },
    logo:{
        width:200,
        height:200
    },
    view:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        padding:35,
        backgroundColor:"#FFFFFF",
        marginBottom:40,
        marginTop:40,
    },
    txt:{
        fontSize:35,
        fontWeight:'700'
    },
    txt1:{
        alignSelf:'center',
        fontWeight:'500',
        color:'grey'
    },
    txt2:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:20,
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:360,
        paddingVertical:15,
        fontSize:20,
        borderRadius:10,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    btnTxt:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'600'
    },
    btn:{
        backgroundColor:'#904fc9',
        width:360,
        paddingVertical:15,
        borderRadius:10,
        marginTop:20,
        alignItems:'center'
    }
})