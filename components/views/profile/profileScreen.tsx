import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigationModule';
import { RouteProp } from '@react-navigation/native'
import { useState } from 'react';
import UpperInfo from './upperInfo'
import BottomInfo from './bottomInfo';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type ProfilecreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenProps = {
    navigation: ProfileScreenNavigationProp;
    route: ProfilecreenRouteProp;
}

type UserDataProps = {
    name: string,
    login: string,
    avatar_url: string,
    followers: number,
    following: number,
    company: string,
    repos_url: string,
    location: string,
    bio: string,
    public_repos: number
}

const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({
    navigation,
    route
}) => {

    const [userData, setUserData] = useState<UserDataProps | any>([])
    const [isLoading, setLoading] = useState<boolean>()

    useEffect(() => {
        setLoading(true);

        fetch(`https://api.github.com/users/${route.params.login}`)
        .then((response) => response.json())
        .then((responseJson) => setUserData(responseJson))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [])

    if(isLoading){
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator animating={true} color={'#3F3D3B'} size={'large'} />
        </View>
        );
    } 
    else{
        return(
            <View style={styles.container}>
                <View style={styles.upperInfo}>
                    <UpperInfo 
                        avatar_url={userData.avatar_url}
                        name={userData.name}
                        followers={userData.followers}
                        following={userData.following}
                        public_repos={userData.public_repos} 
                        bio={userData.bio}
                    />
                </View>
                <View style={styles.bottomInfo}>
                    <BottomInfo repos_url={userData.repos_url} owner={userData.name}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BEBEBE',
    },
    upperInfo: {
        flex: 1,
    },
    bottomInfo: {
        flex: 1,
    }
});

export default ProfileScreen;