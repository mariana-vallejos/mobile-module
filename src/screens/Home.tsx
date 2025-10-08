import { StyleSheet, Text, View } from "react-native"

const Home = () => {
    return(
        <View style={styles.container}>
            <Text>Home component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Home