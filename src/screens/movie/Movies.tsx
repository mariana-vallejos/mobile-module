import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import MovieCarousel from './components/MovieCarousel'
import { TextComp } from '../../components/atoms/textComponent/TextComponent'
import { colors } from '../../constants/colors'

const Movies = () => {

    return (
        <View style={styles.container}>
            <MovieCarousel/>
            <View style={styles.headerMovie}>
                <TextComp variant='subtitle'>Marvel Studios</TextComp>
                <TextComp style={{color: colors.primary}}>See more</TextComp>
            </View>
        </View>
    )
}

export default Movies