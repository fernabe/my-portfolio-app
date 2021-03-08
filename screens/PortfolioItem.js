import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


const PortfolioItem = ({navigation, title, image, content}) => {  
    return(
        <View style={styles.item}>
            <Image 
            source={{ uri: image}}
            style={styles.image}
            resizeMode='cover'
            />
            <Text 
                style={styles.title} 
                onPress={() =>
                    navigation.navigate('Profile', { 
                        title,
                        content,
                        image
                    }   
                )}
                >
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        paddingBottom: 20,
        paddingTop: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    image:{
        width: imageWidth,
        height: imageHeight,
    }
});


export default PortfolioItem;