/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useFavoritContext} from '../../context/FavoritContext';
import {SvgXml} from 'react-native-svg';
import Icon from '../../Utils/Icons';
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

export default function Favariate() {
  const {favorite} = useFavoritContext();
  const {setFavorite} = useFavoritContext();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <Text style={{fontSize: 23}}>Favariate movies</Text>
      </View>
      <FlatList
        data={favorite}
        style={{marginHorizontal: 20}}
        renderItem={({item}) => renderItem2({item, setFavorite})}
        // pagingEnabled
        // horizontal
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
