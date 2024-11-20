import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

export const LeaderBoard=()=>{
    const[score,setScore]=useState([])
    useEffect(()=>{
        fetchScore();
    },[])

    const fetchScore=async()=>{
        try{
            const exist=await AsyncStorage.getItem("score")
            if(exist){
                setScore(JSON.parse(exist))
            }
        }catch(error){
            console.error(error)
        }
        
    }
    const render=({item,index})=>{
        return(
        <View>
            <Text>{index+1}. {item.date} - {item.s}</Text>
        </View>
        )
    }

    return(
        <SafeAreaView>
            {score.length>0 ?(
                <FlatList
                data={score}
                
                keyExtractor={(item,index)=>index.toString()}
                renderItem={render}
                
                />
            ):(<Text>No Score Available.</Text>)}
            {console.log(score)}
        </SafeAreaView>
    )
}