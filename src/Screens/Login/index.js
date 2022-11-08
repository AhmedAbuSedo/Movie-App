import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
const onpress = (email, password) => {
  console.log('====================================');
  console.log(email, password);
  console.log('====================================');
  axios({
    method: 'post',
    url: 'https://student.valuxapps.com/api/login',
    params: {
      email: email,
      password: password,
    },
  })
    .then(res => alert(res.data.message))
    .catch(err => alert('error: ', err));
};
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.innerContainer}>
        <Text style={{marginLeft: 15}}>Email</Text>
        <TextInput
          placeholder="Ahmed@Email.com"
          keyboardType="email-address"
          onChangeText={txt => setEmail(txt)}
          value={email}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{marginLeft: 15}}>Password</Text>
        <TextInput
          placeholder="* * * * * * * * *"
          secureTextEntry={true}
          onChangeText={txt => setPassword(txt)}
          value={password}
        />
      </View>
      <TouchableOpacity
        onPress={() => onpress(email, password)}
        style={styles.but}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  innerContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'gray',
    marginTop: 15,
  },
  but: {
    backgroundColor: 'gray',
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
