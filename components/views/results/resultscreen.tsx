import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import TopBar from './topBar';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';

interface ResultScreenProps {
    userSearched: string
 }

const ResultScreen: React.FunctionComponent<ResultScreenProps> = ({
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
            <TopBar userSearched={userSearched} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default ResultScreen;