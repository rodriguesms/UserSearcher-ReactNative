import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { List, Colors } from 'react-native-paper';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';

export default function SearchBar(){

    let [fontsLoaded] = useFonts({
        PTSans_400Regular
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <View style={styles.bar}>
            <TextInput 
                style={styles.input}
                placeholder="Search username..."
            />
            <List.Icon color={Colors.grey900} icon="account-search-outline"/>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: "row",
        width: "60%",
        height: 45,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#ededed',
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    input: {
        marginHorizontal: 12,
        height: '100%',
        width: '70%',
        fontFamily: 'PTSans_400Regular'
    }
});