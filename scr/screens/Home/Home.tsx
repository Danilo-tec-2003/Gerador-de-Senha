import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextinput } from "../../components/BatTextinput/BatTextinput";
import { BatButtom } from '../../components/BatButton/BatButton'


export default function Home() {
    return (
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                
                <BatButtom/>
            </View>


            <StatusBar style="light" />
        </View>

    )
}


