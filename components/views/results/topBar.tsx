import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { List, Colors } from 'react-native-paper';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';

interface TopBarProps{
    userSearched: string
}

const TopBar: React.FunctionComponent<TopBarProps> =({
    userSearched
}) => {
    let [fontsLoaded] = useFonts({
        PTSans_400Regular
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.searchbox}>
                <List.Icon color={Colors.grey900} icon="chevron-left" />
                <TextInput 
                    style={styles.input}
                    placeholder="Search username..."
                />
                <List.Icon color={Colors.grey900} icon="magnify"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#3f3d3b',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchbox: {
        flexDirection: 'row',
        width: '95%',
        height: 40,
        marginTop: 15,
        backgroundColor: '#ededed',
        borderRadius: 25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
        width: '75%',
        marginRight: 10,
        fontFamily: 'PTSans_400Regular',
        fontSize: 16
    }
});


export default TopBar;