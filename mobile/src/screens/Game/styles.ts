import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 28,
        justifyContent: 'space-between'
    },
    logo: {
        width: 100,
        height: 60
    },
    right: {
        width: 20,
        height: 20
    },
    cover: {
        width: 311,
        height: 160,
        borderRadius: 8,
        marginBottom: 32
    }
});