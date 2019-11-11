import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../components/Home/Header';
import Category from '../components/Home/Category';
import MaterialTopTabNav from '../navigator/MaterialTopTab';
export default class Home extends Component {
  render() {
    //console.log(this.props.navigation);//phai them prop navigation vào prop cua category de category co the hieu dc
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Header setText="PET SHOP" />
          <Category navigation={this.props.navigation} />
          <MaterialTopTabNav />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
