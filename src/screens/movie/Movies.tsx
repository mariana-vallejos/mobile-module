import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { getPopularMovies } from '../../service/TMDBService'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { useSharedValue } from 'react-native-reanimated'

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const Movies = () => {
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
            console.log('Popular movies:', data)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>Movies</Text>
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={ref}
                    width={width}
                    height={width / 2}
                    data={data}
                    onProgressChange={progress}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                        </View>
                    )}
                />
                <Pagination.Basic
                    progress={progress}
                    data={data}
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
        </SafeAreaView>
    )
}

export default Movies