import React, {useState, useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import RepositoryInfo from './repositoryInfo';
import EmptyReposState from './emptyReposState'

type BottomInfoProps = {
    repos_url: string,
    owner: string
}

const BottomInfo: React.FunctionComponent<BottomInfoProps> = ({
    repos_url,
    owner
}) => {

    interface Repos {
        name: string,
        owner: string,
        description: string,
        fork: boolean,
        updated_at: string,
        watchers: number,
        language: string,
        license: any        
    }

    const[repositoriesData, setRepositoriesData] = useState<Array<Repos>>([])
    const[isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        fetch(repos_url)
        .then((response) => response.json())
        .then((jsonObj) => jsonObj)
        .then((responseJson) => setRepositoriesData(responseJson))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, []);

    return(
        <View style={styles.container}>
        {isLoading ? (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator animating={true} color={'#3F3D3B'} size={'large'} />
            </View>
        ) : (
            <View style={{flex:1}}>
                {(repositoriesData.length > 0) ? 
                    <FlatList 
                        data={repositoriesData}
                        renderItem={({item}) => 
                            <RepositoryInfo license={item.license} description={item.description}  fork={item.fork} name={item.name} owner={item.owner} updated_at={item.updated_at} watchers={item.watchers} language={item.language} />
                        }
                    />                    
                     :(<EmptyReposState ownerName={owner} />)}
            </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default BottomInfo;