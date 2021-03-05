import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import PortfolioItem from './PortfolioItem';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Javascript Project',
        image: require('../assets/js.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'React Project',
        image: require('../assets/react-logo.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Mern Project',
        image: require('../assets/mern-logo.png'),
    }
];

const PortfolioList = ({ navigation }) => {

    const renderItem = ({item}) => (
        <PortfolioItem navigation={navigation} title={item.title} image={item.image}/>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default PortfolioList;