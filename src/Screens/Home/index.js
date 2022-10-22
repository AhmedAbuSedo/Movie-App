/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../../Utils/Icons';
import {SvgXml} from 'react-native-svg';
import InputFiled from './components/InputFiled';
import styles from './components/style';
import {useFavoritContext} from '../../context/FavoritContext';
const list = [
  {
    id: 0,
    img: Icon.headerImg,
  },
  {
    id: 1,
    img: Icon.headerImg,
  },
  {
    id: 2,
    img: Icon.headerImg,
  },
  {
    id: 3,
    img: Icon.headerImg,
  },
];
const mocaData = [
  {
    id: 0,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 1,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 2,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 3,
    img: Icon.ImageMoca,
    favorite: false,
  },
];
const mocaDataTow = [
  {
    id: 0,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 1,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 2,
    img: Icon.ImageMoca,
    favorite: false,
  },
  {
    id: 3,
    img: Icon.ImageMoca,
    favorite: false,
  },
];

const renderItem = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <SvgXml xml={item.img} />
    </TouchableOpacity>
  );
};
const renderItem2 = ({item, setFavorite}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <SvgXml
        xml={item.img}
        style={{
          marginHorizontal: 15,
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 15,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          item.favorite = !item.favorite;
          item.favorite
            ? setFavorite(pre => [...pre, item])
            : setFavorite(pre =>
                pre.filter(favoriteItem => favoriteItem.id !== item.id),
              );
        }}
        style={{position: 'absolute', top: 35, right: 25}}>
        <SvgXml xml={item.favorite ? Icon.favorite : Icon.disLike} />
      </TouchableOpacity>
    </View>
  );
};
export default function Home() {
  const {setFavorite} = useFavoritContext();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <InputFiled />
        <FlatList
          data={list}
          renderItem={({item}) => renderItem({item})}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <ScrollView>
          <>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 14,
                }}>
                <Text style={{fontSize: 23}}>What's New</Text>
                <Text onPress={() => {}} style={{color: '#6C63FF'}}>
                  see all {'>'}
                </Text>
              </View>
              <FlatList
                data={mocaData}
                renderItem={({item}) => renderItem2({item, setFavorite})}
                // pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 15,
                }}>
                <Text style={{fontSize: 23}}>Popular movies</Text>
                <Text onPress={() => {}} style={{color: '#6C63FF'}}>
                  see all {'>'}
                </Text>
              </View>
              <FlatList
                data={mocaDataTow}
                renderItem={({item}) => renderItem2({item, setFavorite})}
                // pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
