import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../assets/icons";

export default function Home() {
    const route = useRoute();
    const {name} = route.params;
    // const name = 'tarun'
    console.log('========>', name);
    const [difficulty, setDifficulty] = useState('easy');
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.head}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 50, padding: 10, }}>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={icons.user}
                            style={styles.userr}
                        />
                        <View style={{alignSelf:'center'}}>
                        <Text style={styles.txt1}>Hello,</Text>
                        <Text style={styles.txt2}>{name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('LeaderBoard')}>
                    <View style={{backgroundColor:"#FFFFFF",padding:5,borderRadius:5}}>
                        <Image
                        source={icons.podium}
                        style={{height:30,width:30,alignSelf:'center'}}
                        />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>ScoreBoard</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }} >

                <Image
                    source={icons.logic}
                    style={styles.logo}
                />
                <View style={styles.container}>

                    <Text style={styles.title}>MATH'S QUIZ</Text>
                    <Text style={styles.subtitle}>Select DIfficulty</Text>
                    <View style={styles.diffCont}>
                        {["easy", "medium", "hard"].map((level) => (
                            <TouchableOpacity
                                key={level}
                                onPress={() => setDifficulty(level)}
                                style={[styles.difficultyButton, difficulty === level && styles.selectedDifficulty]}
                            >
                                <Text style={styles.difficultyText}>{level.toUpperCase()}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("QuizScreen", { difficulty })} style={styles.btn}>
                        <Text style={styles.btnTxt}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10
    },
    diffCont: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    difficultyButton: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,

    },
    selectedDifficulty: {
        backgroundColor: '#4caf50',
        borderColor: '#4caf50'
    },
    difficultyText: {
        fontSize: 16,
        color: "#000"
    },
    btn: {
        backgroundColor: '#3e92e6',
        paddingVertical: '15',
        borderRadius: 10,
        paddingHorizontal: 60
    },
    btnTxt: {
        size: 18,
        color: '#FFFFFF',
        fontWeight: '700'
    },
    logo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 16,
        alignItems: 'center',
        // marginVertical: 10,
        backgroundColor: '#8ebcf5',
    },
    userr: {
        height: 37,
        width: 37,
        marginRight: 10,
        alignSelf: 'center'
    },
    txt2: {
        fontWeight: '600',
        fontSize: 15,
    },
    txt1: {
        fontWeight: '500',
        fontSize: 13,
        color: 'grey'
    },

})