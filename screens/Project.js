import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Project = ({ route }) => {  
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri:route.params.image }}
                style={styles.image}
                resizeMode='contain'
            />
            <Text
                style={styles.title}
            >
                {route.params.title}
            </Text>

            <Text>{route.params.content}</Text>

        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150, 
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 20   
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        padding: 20
    }

});

export default Project;







  
