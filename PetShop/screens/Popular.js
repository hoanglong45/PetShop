import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View} from 'react-native';
import PetItem from '../components/Home/PetItem';
const DATA = [
  {
    id: '1',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info:
      'is a dog \n bark \n a \n lotttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
    price: 'Free',
    type: 'Dog',
  },
  {
    id: '2',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Cat',
  },
  {
    id: '3',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Bird',
  },
  {
    id: '4',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Hamster',
  },
  {
    id: '5',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Fish',
  },
];
export default class Popular extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={item => {
            console.log(
              item.item.source,
              item.item.name,
              item.item.info,
              item.item.price,
              item.item.type,
            );
            return (
              <PetItem
                navigation={this.props.screenProps}
                source={item.item.source}
                name={item.item.name}
                info={item.item.info}
                price={item.item.price}
                type={item.item.type}
              />
            );
          }}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
