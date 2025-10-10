import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020ff',
    },
    header: {
        backgroundColor: '#007AFF',
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
    carouselContainer: {
        position: 'relative',
    },
    carouselBottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 40,
    },
    carouselBottomText: {
        flexDirection: 'row',
        gap: 30, justifyContent: 'center',
        zIndex: 1,
        paddingBottom: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10,
        paddingInline: 10
    },
    headerMovie: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInline: 25,
        paddingTop: 30,
    },
});