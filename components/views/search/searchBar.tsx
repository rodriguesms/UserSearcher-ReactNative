import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationModule';
import { RouteProp } from '@react-navigation/native'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type SearchBarProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
    navigation, route
}) => {

    const [userSearched, setUser] = useState("");
    const [warning, setWarning] = useState("")
    let [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSans_700Bold
    });

    const [load,setLoad] = useState(true)

    useEffect(()=>{
        setUser("")
        navigation.addListener('focus', ()=>setLoad(!load))
    },[load, navigation])


    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.bar}>
                <TextInput 
                    style={styles.input}
                    placeholder={"Search User..."}
                    value={userSearched}
                    onChangeText={setUser}
                />
                <IconButton 
                    color={Colors.grey900} 
                    icon="account-search-outline"
                    onPress={() => {
                        if(userSearched!=""){
                            setWarning("");
                            navigation.navigate('Results', {
                                user: userSearched
                            })
                        }else{
                            setWarning("Invalid User");
                            }
                        }
                    }
                />
            </View>
            <Text style={styles.warning}>{warning}</Text>
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
        fontFamily: 'PTSans_400Regular',
        fontSize: 16
    },
    warning: {
        marginTop: 10,
        color: '#DE1738',
        fontFamily: 'PTSans_700Bold',
        fontSize: 16
    }
});

export default SearchBar;