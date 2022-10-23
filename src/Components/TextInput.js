import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
export default function TextInputField() {
  const [over8, setover8] = useState(false);
  const [capital, setcapital] = useState(false);
  const [smaller, setsmaller] = useState(false);
  const [newTxt, setNewTxt] = useState('');
  useEffect(() => {
    if (newTxt.match(/\w*[a-z]\w*/)) {
      setsmaller(true);
    } else {
      setsmaller(false);
    }
    if (newTxt.match(/\w*[A-Z]\w*/)) {
      setcapital(true);
    } else {
      setcapital(false);
    }
    if (newTxt.length >= 8) {
      setover8(true);
    } else {
      setover8(false);
    }
  }, [newTxt, smaller, capital, over8]);
  return (
    <View>
      <TextInput placeholder="Password" onChangeText={txt => setNewTxt(txt)} />
      {over8 ? (
        <Text style={{color: 'green'}}>have 8 char</Text>
      ) : (
        <Text>have 8 char</Text>
      )}
      {smaller ? (
        <Text style={{color: 'green'}}>have smaller</Text>
      ) : (
        <Text>have smaller</Text>
      )}
      {capital ? (
        <Text style={{color: 'green'}}>have capital</Text>
      ) : (
        <Text>have capital</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
