import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;


const PortfolioItem = ({navigation, title, image, content}) => {  
    return(
        <TouchableOpacity 
            style={styles.item}
            onPress={() =>
                navigation.navigate('Profile', { 
                    title,
                    content,
                    image
                }   
            )}>
        <Image 
        source={{ uri: image}}
        style={styles.image}
        resizeMode='cover'
        />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        paddingBottom: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#caccac",
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    image:{
        width: imageWidth - 22,
        height: 150,
    }
});


export default PortfolioItem;