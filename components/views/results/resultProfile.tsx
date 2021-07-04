import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'; 
import { useFonts, PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans';
import AppLoading from 'expo-app-loading';
import { Colors, List } from 'react-native-paper';

type resultProfileProps = {
    id: number,
    login: string,
    avatar_url: string,
    type: string
}

const ResultProfile: React.FunctionComponent<resultProfileProps> = ({
    id,
    login,
    avatar_url,
    type
}) => {
    
    let [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSans_700Bold
    });

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image
                        style={styles.photo}
                        source={{
                        uri: avatar_url,
                        }}
                    />
                </View>
                <View style={{flex: 4, flexDirection: 'row'}}>
                    <View style={styles.info}>
                        <Text style={{fontFamily: 'PTSans_700Bold', fontSize: 18}}>{login}</Text>
                        <Text style={{fontFamily: 'PTSans_400Regular', fontSize: 14}}>{type}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <List.Icon color={Colors.black} icon="chevron-right"/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "95%",
        height: 75,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 3
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
    },
    info: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    }
});

export default ResultProfile;