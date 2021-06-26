import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import TopBar from './topBar';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationModule';
import { RouteProp } from '@react-navigation/native'

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

type ResultScreenProps = {
    navigation: ResultScreenNavigationProp;
    route: ResultScreenRouteProp;
}


const ResultScreen: React.FunctionComponent<ResultScreenProps> = ({
    navigation,
    route
}) => {
    let [fontsLoaded] = useFonts({
        PTSans_400Regular
    });

    let userSearched = route.params

    if (!fontsLoaded){
        return <AppLoading />;
    }
    
    return(
        <View style={styles.container}>
            <TopBar userSearched={userSearched.user} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default ResultScreen;