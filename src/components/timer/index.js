import { useEffect, useState } from "react"
import { StyleSheet, Text } from "react-native";

export const Timer = ({ onTimeOut,questionIndex }) => {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(()=>{
        setTimeLeft(10)
    },[questionIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setTimeout(()=>onTimeOut(),0)
                    return 0;
                }
                return prev - 1
            })
        },1000)
        return ()=>clearInterval(interval)
    },[onTimeOut])


    return (
        <Text style={styles.timer}>TimeLeft: {timeLeft}</Text>
    )

}

const styles=StyleSheet.create({
    timer:{
        fontSize:16,
        color:'#f44336',
        marginBottom:10,
    }
})