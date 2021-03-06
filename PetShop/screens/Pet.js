import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
class Pet extends Component {
  state = {
    icon: JSON.stringify(this.props.navigation.getParam('icon')).replace(
      /\"/g,
      '',
    ),
    //get param phải replace "" bằng ' ' để tránh gây lỗi
    entries: [
      {
        img: JSON.stringify(this.props.navigation.getParam('img1')).replace(
          /\"/g,
          '',
        ),
      },
      {
        img: JSON.stringify(this.props.navigation.getParam('img2')).replace(
          /\"/g,
          '',
        ),
      },
      {
        img: JSON.stringify(this.props.navigation.getParam('img3')).replace(
          /\"/g,
          '',
        ),
      },
    ],
  };
  get pagination() {
    const {entries, activeSlide = 0} = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: '#F5F7FA'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem({item, index}) {
    return <Image source={{uri: item.img}} style={styles.image} />;
  }
  AddToCart(prop) {
    const item = {
      source1: JSON.stringify(this.props.navigation.getParam('img1')).replace(
        /\"/g,
        '',
      ),
      source2: JSON.stringify(this.props.navigation.getParam('img2')).replace(
        /\"/g,
        '',
      ),
      source3: JSON.stringify(this.props.navigation.getParam('img3')).replace(
        /\"/g,
        '',
      ),
      name: JSON.stringify(this.props.navigation.getParam('name')).replace(
        /\"/g,
        '',
      ),
      info: JSON.stringify(this.props.navigation.getParam('info')).replace(
        /\"/g,
        '',
      ),
      id: prop.getParam('id'),
      price: JSON.stringify(this.props.navigation.getParam('price')).replace(
        /\"/g,
        '',
      ),
    };
    this.props.RemoveFromCart(prop.getParam('id'));
    this.setState({icon: 'shopping-basket-remove'});
    this.props.DispatchAddItemToCart(item);
  }
  RemoveFromCart(prop) {
    const item = {
      source1: JSON.stringify(this.props.navigation.getParam('img1')).replace(
        /\"/g,
        '',
      ),
      source2: JSON.stringify(this.props.navigation.getParam('img2')).replace(
        /\"/g,
        '',
      ),
      source3: JSON.stringify(this.props.navigation.getParam('img3')).replace(
        /\"/g,
        '',
      ),
      name: JSON.stringify(this.props.navigation.getParam('name')).replace(
        /\"/g,
        '',
      ),
      info: JSON.stringify(this.props.navigation.getParam('info')).replace(
        /\"/g,
        '',
      ),
      id: prop.getParam('id'),
      price: JSON.stringify(this.props.navigation.getParam('price')).replace(
        /\"/g,
        '',
      ),
    };
    this.props.AddToCart(prop.getParam('id'));
    this.setState({icon: 'shopping-basket-add'});
    this.props.DispatchRemoveItemFromCart(item);
  }
  render() {
    //param tu screen khac gui qua duoi dang json
    //check key
    //console.log(this.props.navigation.getParam('id'));
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.header}>
            {JSON.stringify(this.props.navigation.getParam('name')).replace(
              /\"/g,
              '',
            )}
          </Text>
          <Carousel
            autoplayDelay={0}
            enableSnap={true}
            loop={true}
            autoplay={true}
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get('window').width} //- 10
            itemWidth={Dimensions.get('window').width}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
          <TouchableOpacity
            onPress={() =>
              this.state.icon === 'shopping-basket-add'
                ? this.AddToCart(this.props.navigation) //.getParam('id')
                : this.RemoveFromCart(this.props.navigation)
            }
            style={{alignSelf: 'flex-end', top: -50, marginRight: 30}}>
            <View
              style={{
                height: 75,
                width: 75,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'powderblue',
                borderRadius: 50,
              }}>
              <Icon
                size={30}
                name={this.state.icon}
                color={
                  this.state.icon === 'shopping-basket-add' ? 'black' : 'red'
                }
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.price}>
            ${' '}
            {JSON.stringify(this.props.navigation.getParam('price')).replace(
              /\"/g,
              '',
            )}
          </Text>
          <Text style={styles.info}>
            {JSON.stringify(this.props.navigation.getParam('info')).replace(
              /\"/g,
              '',
            )}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
  header: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#420000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  price: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#420000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: -100,
    marginLeft: 20,
  },
  info: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#420000',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginTop: 30,
  },
});

const mapDispatchToProps = dispatch => ({
  AddToCart: id => dispatch({type: 'ADD_TO_CART', id}),
  RemoveFromCart: id => dispatch({type: 'REMOVE_FROM_CART', id}),
  DispatchAddItemToCart: item => dispatch({type: 'ADD_ITEM_TO_CART', item}),
  DispatchRemoveItemFromCart: item =>
    dispatch({type: 'REMOVE_ITEM_FROM_CART', item}),
});
export default connect(null, mapDispatchToProps)(Pet);
