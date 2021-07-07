import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { List, Colors } from 'react-native-paper';

type licenseObj = {
    key: string,
    name: string,
    url: string,
    node_id: string
}

type RepositoryInfoProps = {
    name: string,
    owner: Object,
    description: string,
    fork: boolean,
    updated_at: string,
    watchers: number,
    language: string,
    license: licenseObj
}

const RepositoryInfo: React.FunctionComponent<RepositoryInfoProps> = ({
    name,
    owner,
    description,
    fork,
    watchers,
    updated_at,
    language,
    license
}) => {
    return(
        <View style={style.container}>
            <Text style={{fontSize: 21, fontFamily: 'PTSans_700Bold', marginHorizontal: 10, marginTop: 10}}>{name}</Text>
            {fork ? (
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <List.Icon icon='source-fork' color={Colors.grey700} style={{aspectRatio: 5}}/>
                        <Text style={{fontSize: 16, color: '#3F3D3B', fontFamily: 'PTSans_700Bold', alignSelf: 'center', marginLeft: -10}}>{watchers}</Text>
                        <List.Icon icon='star-outline' color={Colors.grey700} style={{aspectRatio: 5, marginLeft: -5}}/>
                    </View>
                    <View>
                        {description==null ? 
                            <Text style={{fontSize: 16, marginHorizontal: 10, fontFamily: 'PTSans_700Bold', color: '#3F3D3B', marginBottom: 10}}>Updated at: {updated_at.substring(0, 9)}</Text> 
                            : (
                            <View>
                                <Text style={{fontSize: 16, marginLeft: 10, fontFamily: 'PTSans_700Bold', color: '#3F3D3B'}}>Updated at: {updated_at.substring(0, 9)}</Text>
                                <Text style={{fontFamily: 'PTSans_400Regular', fontSize: 16, marginLeft: 10, marginBottom: 10}}>{description}</Text>
                            </View>)
                        }
                    </View>
                </View>
            ) : (
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, color: '#3F3D3B', fontFamily: 'PTSans_700Bold', marginLeft: 10}}>{language}</Text>
                        <Text style={{fontSize: 16, color: '#3F3D3B', fontFamily: 'PTSans_700Bold', alignSelf: 'center', marginLeft: 10}}>{watchers}</Text>
                        <List.Icon icon='star-outline' color={Colors.grey700} style={{aspectRatio: 5, marginLeft: -10}}/>
                        {license == null ? <View /> : 
                            <Text style={{fontSize: 16, color: '#3F3D3B', fontFamily: 'PTSans_700Bold', marginLeft: -5}}>{license.name}</Text>}
                    </View>
                    <View>
                        {description==null ? 
                            <Text style={{fontSize: 16, marginHorizontal: 10, fontFamily: 'PTSans_700Bold', color: '#3F3D3B', marginBottom: 10}}>Updated at: {updated_at.substring(0, 9)}</Text> 
                            : (
                            <View>
                                <Text style={{fontSize: 16, marginHorizontal: 10, fontFamily: 'PTSans_700Bold', color: '#3F3D3B'}}>Updated at: {updated_at.substring(0, 9)}</Text>
                                <Text style={{fontFamily: 'PTSans_400Regular', fontSize: 16, marginHorizontal: 10, marginBottom: 10}}>{description}</Text>
                            </View>)
                        }
                    </View>
                </View>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderTopColor: '#3F3D3B',
        borderTopWidth: 1,
        
    }
});

export default RepositoryInfo;