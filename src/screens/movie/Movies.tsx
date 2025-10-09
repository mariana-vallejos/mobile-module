import { Dimensions, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { getPopularMovies } from '../../service/TMDBService'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
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

    useEffect(() => {
        getPopularMovies().then((data) => {
            console.log('Popular movies:', data)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>Movies</Text>
            <View>
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
            </View>
        </SafeAreaView>
    )
}

export default Movies