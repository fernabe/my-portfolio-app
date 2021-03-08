import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';


const PortfolioList = ({ navigation }) => {
    
    const [projects, setData] = React.useState({});

    React.useEffect(() => {
        axiosApiCall();
    });
    
    const axiosApiCall = () => {
        axios({
            "method": "GET",
            "url": "https://evening-castle-95061.herokuapp.com/projects/",
        })
        .then((response) => {
            let project_names = response.data.map((project) => ( 
                {
                    id: project.id,
                    title: project.Titulo,
                    content: project.Contenido,
                    image: project.Imagen.url
                }
            ));
            setData(project_names);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    
    const renderItem = ({item}) => (
        <PortfolioItem navigation={navigation} title={item.title} image={item.image} content={item.content}/>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={projects}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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