import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

type UpperInfoProps = {
    avatar_url: string,
    name: string,
    followers: number,
    following: number,
    public_repos: number,
    bio: string
}

const UpperInfo: React.FC<UpperInfoProps> = ({
    avatar_url,
    name,
    followers,
    following,
    public_repos,
    bio
}) => {

    return(
        <View style={styles.container}>
            <View style={styles.profile_picture}>
                <Image style={styles.photo}
                        source={{
                        uri: avatar_url,
                        }}
                    />
            </View>
            <View style={styles.name_bio}>
                <Text style={styles.name}>{name}</Text>
                <Text numberOfLines={3} style={styles.bio}>{bio}</Text>
            </View>
            <View style={styles.numbersInfo}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'PTSans_700Bold',  fontSize: 21}}>Followers</Text>
                    <Text style={{ fontFamily: 'PTSans_400Regular',  fontSize: 18}}>{followers}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'PTSans_700Bold',  fontSize: 21}}>Repositories</Text>
                    <Text style={{ fontFamily: 'PTSans_400Regular',  fontSize: 18}}>{public_repos}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'PTSans_700Bold',  fontSize: 21}}>Following</Text>
                    <Text style={{ fontFamily: 'PTSans_400Regular',  fontSize: 18}}>{following}</Text>
                </View>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#3F3D3B',
        flexDirection: 'column',
        flex: 1
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#3F3D3B'
    },
    profile_picture: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 2
    },
    name_bio: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'PTSans_700Bold',
        fontSize: 21,
        textAlign: 'center'
    },
    bio: {
        fontFamily: 'PTSans_400Regular',
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 15
    },
    numbersInfo: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default UpperInfo;