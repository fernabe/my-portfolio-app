import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Project = ({ navigation, route }) => {  
    return (
        <View>
            <Image 
                source={ route.params.image }
                style={styles.image}
            />
            <Text
                style={styles.title}>{route.params.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },

});

export default Project;










  
