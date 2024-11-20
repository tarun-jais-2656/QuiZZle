import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { generateQuestion } from "../../utils/generateQuestions";
import { Timer } from "../../components/timer";
import { icons } from "../../assets/icons";

export default function QuizScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    // const {difficulty} = route.params;
    const difficulty = 'easy'
    // console.log(difficulty);
    const [userAnswer, setUserAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)


    useEffect(() => {
        setCurrentQuestion(generateQuestion(difficulty));
    }, [questionIndex]);

    const handleSubmit = () => {
        if (parseFloat(userAnswer) === parseFloat(currentQuestion.answer)) {
            setScore(score + 1);
        }
        setUserAnswer('');
        if (questionIndex < 9) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigation.navigate('ResultScreen', { score })
        }
    }

    const handleTimeOut = () => {
        if (questionIndex < 9) {
            setQuestionIndex(questionIndex + 1)
        } else {
            navigation.navigate('ResultScreen', { score })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 16 }}>
                <Image
                    source={icons.travel}
                    style={{height:200,width:200,alignSelf:'flex-end'}}
                />
                <Text style={styles.question}> What is the Value of?    {currentQuestion.question}</Text>
                <Timer onTimeOut={handleTimeOut} questionIndex={questionIndex} />
                <TextInput
                    style={styles.input}
                    placeholder="Answer Please!"
                    keyboardType="numeric"
                    value={userAnswer}
                    onChangeText={setUserAnswer}
                />
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.txt}>Submit</Text>
                </TouchableOpacity>
                <Text style={styles.score}>CurrentScore:     {score}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center'
        padding: 20,
        backgroundColor: '#a2e8cc',

    },
    txt:{
        fontSize:18,
        fontWeight:'700',
        color:'#FFFFFF'
    },
    btn:{
        backgroundColor:'#3e92e6',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10
    },
    question: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        padding: 10,
        marginBottom: 20,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
    },
    score: {
        fontSize: 18, marginTop: 20,
        alignSelf:'center',
        fontWeight:'700'
    }
})