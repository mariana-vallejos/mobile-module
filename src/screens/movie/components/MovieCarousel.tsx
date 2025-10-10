import { View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonComponent } from '../../../components/atoms/buttonComponent/ButtonComponent'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { MovieCard } from './MovieCard'
import LinearGradient from 'react-native-linear-gradient'
import { TextComp } from '../../../components/atoms/textComponent/TextComponent'
import { colors } from '../../../constants/colors'
import { styles } from '../style'
import { useSharedValue } from 'react-native-reanimated'
import { getPopularMovies } from '../../../service/TMDBService'

const { width, height } = Dimensions.get("window");

const MovieCarousel = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    const onPress = () => console.log('touched');

    useEffect(() => {
        getPopularMovies().then((data) => {
            console.log(data)
            setMovies(data.slice(0, 5))
        })
    }, [])
    return (
        <View style={styles.carouselContainer}>
            <Carousel
                ref={ref}
                width={width}
                height={height * 0.60}
                data={movies}
                onProgressChange={progress}
                renderItem={({ item }) => (
                    <MovieCard posterPath={item.poster_path} />
                )}
            />

            <View style={styles.carouselBottomContainer}>
                <View style={styles.carouselBottomText}>
                    <TextComp style={{ fontSize: 18 }}>My list</TextComp>
                    <TextComp style={{ fontSize: 18 }}>Discover</TextComp>
                </View>
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.4)',]}
                    locations={[0, 0.5, 1]}
                    style={{
                        position: "absolute",
                        bottom: -20,
                        left: 0,
                        right: 0,
                        height: height * 0.20,
                        zIndex: 0
                    }}
                />
                <View style={styles.buttonsContainer}>
                    <ButtonComponent variant='secondary' title='+ Wishlist' onPress={onPress} />
                    <ButtonComponent variant='primary' title='Details' onPress={onPress} />
                </View>
            </View>
            <Pagination.Basic
                progress={progress}
                data={movies}
                dotStyle={{ backgroundColor: colors.textSecondary, borderRadius: 50 }}
                activeDotStyle={{ backgroundColor: colors.primary }}
                containerStyle={{ gap: 10, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    )
}

export default MovieCarousel