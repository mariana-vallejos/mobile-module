import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { getPopularMovies } from '../../service/TMDBService'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { useSharedValue } from 'react-native-reanimated'
import { MovieCard } from './components/MovieCard'

 const {width, height} = Dimensions.get("window");

 interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const Movies = () => {
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
            setMovies(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={ref}
                    width={width}
                    height={height * 0.60}
                    data={movies}
                    onProgressChange={progress}
                    renderItem={({ item }) => (
                        <MovieCard posterPath={item.poster_path}/>
                    )}
                />
                <Pagination.Basic
                    progress={progress}
                    data={movies}
                    dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                    containerStyle={{ gap: 5, marginTop: 10 }}
                    onPress={onPressPagination}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
                        <Text style={styles.buttonTextSecondary}>+ Wishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
                        <Text style={styles.buttonTextPrimary}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Movies