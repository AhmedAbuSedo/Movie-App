import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
const onPress = (name, email, password, phone) => {
  axios({
    method: 'post',
    url: 'https://student.valuxapps.com/api/register',
    params: {
      name: name,
      email: email,
      password: password,
      phone: phone,
    },
  })
    .then(res => alert(res.data.message))
    .catch(err => alert('error: ', err));
};
export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View>
      <Text>SignUp</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={txt => setName(txt)}
        value={name}
      />
      <Text>Email</Text>
      <TextInput
        placeholder="Enter Your Email"
        onChangeText={txt => setEmail(txt)}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter Your Password"
        onChangeText={txt => setPassword(txt)}
        value={password}
      />
      <Text>phone</Text>
      <TextInput
        placeholder="Enter Your Phone"
        onChangeText={txt => setPhone(txt)}
        value={phone}
      />
      <TouchableOpacity onPress={() => onPress(name, email, password, phone)}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
