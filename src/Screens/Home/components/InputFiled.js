import React from 'react';
import {View, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icon from '../../../Utils/Icons';
import styles from './style';
const InputFiled = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={Icon.search} />
      <TextInput placeholder="Search for What you want.." />
      <SvgXml xml={Icon.mic} />
    </View>
  );
};

export default InputFiled;
