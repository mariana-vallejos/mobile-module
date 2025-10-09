import { Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { getPopularMovies } from '../../service/TMDBService'

const Movies = () => {
    useEffect(() => {
        getPopularMovies().then((data) => {
            console.log('Popular movies:', data)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>Movies</Text>
        </SafeAreaView>
    )
}

export default Movies