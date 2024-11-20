import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets/icons";

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('UserDetail');
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={icons.quiz}
                style={styles.logo}
            />
            <Text style={styles.txt}>QuiZZle</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#51a6f5' },
    logo:{
        height:100,
        width:100,
    },
    txt:{
        fontSize:35,
        fontWeight:'700',
        marginTop:10,
    }
});