import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'; 
import TopBar from './topBar';
import ResultProfile from './resultProfile';
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

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let userSearched = route.params

    useEffect(() =>{
        fetch('https://api.github.com/search/users?q='+userSearched)
        .then((response) => response.json())
        .then((json) => setData(json.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    /* fetch('https://api.github.com/search/users?q='+userSearched)
    .then((response) => response.json())
    .then((json) => {
        return json.items
    })
    .catch((error) => {
        console.error(error);
      }); */

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <View style={styles.container}>
            <TopBar userSearched={userSearched.user} navigation={navigation} route={route} />
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data = {data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ items }) => (
                        <ResultProfile id={items.id} login={items.login} avatar_url={items.avatar_url} type={items.type} />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: '#BEBEBE'
    }
});

export default ResultScreen;