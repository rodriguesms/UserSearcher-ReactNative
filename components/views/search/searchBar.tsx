import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import AppLoading  from 'expo-app-loading';
import { useFonts, PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans';

interface SearchBarProps{}

function goToResults(user:string){
    return(
        console.log(user)
    );
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({}) => {

    const [user, setUser] = useState("");
    const [warning, setWarning] = useState("")
    let [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSans_700Bold
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.bar}>
                <TextInput 
                    style={styles.input}
                    placeholder={"Search User..."}
                    value={user}
                    onChangeText={setUser}
                />
                <IconButton 
                    color={Colors.grey900} 
                    icon="account-search-outline"
                    onPress={() => {
                        if(user!=""){
                            setWarning("");
                            goToResults(user);
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
        fontFamily: 'PTSans_700Bold'
    }
});

export default SearchBar;