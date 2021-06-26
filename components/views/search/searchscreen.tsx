import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from './searchBar';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular } from '@expo-google-fonts/pt-sans';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationModule';
import { RouteProp } from '@react-navigation/native'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type SearchScreenProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
}

const SearchScreen: React.FunctionComponent<SearchScreenProps> = ({
    navigation,
    route
}) => {

    let [fontsLoaded] = useFonts({
        PTSans_400Regular
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/img/white-icon.png')}
                />
            </View>
            <View style={{flex: 2, width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                <SearchBar navigation={navigation} route={route} />
                <Text style={{marginBottom: 20, fontSize: 15, fontFamily: 'PTSans_400Regular', color: 'white'}}>Desafio Sisenex Mobile</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3f3d3b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 200,
        height: 150,
    },
    logo: {
        flex: 2,
        height: 50,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
  });

  export default SearchScreen;