import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ResultScreen() {
    const route = useRoute();
    const {score}=route.params;
    const s=score;
    
    // const score = 8;
    const navigation = useNavigation();
    useEffect(()=>{
        save();
    },[])

    const save=async()=>{
        try{
            const date=new Date().toDateString();
       
            const newScore={date,s};
            const exist=await AsyncStorage.getItem("score");
            const score=exist ? JSON.parse(exist):[];
            console.log(score)
            score.push(newScore);
            await AsyncStorage.setItem("score",JSON.stringify(score));
        }catch(error){
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {score >= 8 ? (
                <View >
                    <Image
                        source={icons.congo}
                        style={styles.congo}
                    />
                    <Image
                        source={icons.trophy}
                        style={styles.trophy}
                    />
                    <Text style={{alignSelf:'center',fontSize:15,fontWeight:'500'}}>You are a Top performer</Text>
                </View>
            ) : (
                <>
                <Image
                    source={icons.sad}
                    style={styles.sad}
                />
                <Text style={{alignSelf:'center',fontSize:15,fontWeight:'500'}}>You are a not a good performer</Text>
                </>
            )
            }

            <Text style={styles.score}>Final Score: {score}/10</Text>
            <TouchableOpacity style={{backgroundColor:'#3e92e6',paddingHorizontal:100,borderRadius:10,marginTop:200,paddingVertical:10,}} onPress={()=>navigation.navigate('Home',{})}>
                <Text style={{fontSize:18,color:'#FFFFFF',fontWeight:'700'}}>Restart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center'
    },
    trophy: {
        height: 200,
        width: 300,
    },
    congo: {
        height: 100,
        width: 300,
        // resizeMode:'contain'
    },
    score: {
        fontSize: 24,
        marginBlock: 20,
        fontWeight:'700'
    },
    sad:{
        height:200,
        width:200
    }
})