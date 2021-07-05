import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';
import { List, Colors } from 'react-native-paper';
import AppLoading from 'expo-app-loading';

type emptyStateProps = { }

const EmptyState: React.FunctionComponent<emptyStateProps> = ({ }) => {

    let [fontsLoaded] = useFonts({
        PTSans_400Regular
    });

    if(!fontsLoaded){
        return(
            <AppLoading />
        )
    }

    return (
        <View style={styles.container}>
            <List.Icon color={Colors.grey800} icon="emoticon-confused-outline" />
            <Text style={{fontSize: 18, fontFamily: 'PTSans_400Regular', marginHorizontal: 50, marginBottom: 20, marginTop: -15, textAlign: 'center'}}>We couldn’t find any users matching with your search.</Text>
            <Text style={{fontSize: 16, fontFamily: 'PTSans_400Regular'}}>Try again...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default EmptyState;