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

    interface dataTypes {
        id: number,
        login: string,
        avatar_url: string,
        type: string
    }

    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<dataTypes | any>([]);
    const [userSearched, setUserSearched] = useState<string>(route.params.user);
    
    useEffect(() =>{
        searchUser();
    }, []);

    const searchUser = () => {

        setLoading(true);

        fetch(`https://api.github.com/search/users?q=${userSearched}`)
        .then((response) => response.json())
        .then((responseJson) => setData(responseJson.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

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
            <TopBar userSearched={userSearched} navigation={navigation} route={route} setUserSearched={setUserSearched} searchAgain={searchUser} isLoading={isLoading}/>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data = {data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <ResultProfile id={item.id} login={item.login} avatar_url={item.avatar_url} type={item.type} />
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