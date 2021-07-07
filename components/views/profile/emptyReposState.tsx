import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

type EmptyReposStateProps = { 
    ownerName: string
}

const EmptyReposState: React.FunctionComponent<EmptyReposStateProps> = ({
    ownerName
}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.message}>{ownerName} has no public repositories to show... </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        fontFamily: 'PTSans_400Regular'
    }
})

export default EmptyReposState;