import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
const {height, width} = Dimensions.get('screen');
import firebase from '../config'
import { useHistory } from 'react-router';

const LogintoHome = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function toInscription () {
      history.push("/Inscription")
    }

    function loginUser () {

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            history.push("/Home")
            // ...
        })
          .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage)
        });  
    }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>
              Login :
            </Text>
            <TextInput
            style={styles.inp}
            placeholder={"Please Enter Your Email"}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.inp}
            placeholder={"Please Enter Your Password"}
            secureTextEntry
            onChangeText={setPassword}
            />
            <View style={styles.con}>
                <Button 
                // style={styles.btn10}
                title="Connection"
                onPress={loginUser}
                />
                <Text></Text>
                <Button
                // style={styles.btn2}
                title="Registre"
                onPress={toInscription}
                />
            </View>
        </View>
    )

}

export default LogintoHome;

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#2a2438',
      alignItems: 'center',
      justifyContent: 'center',
    },
    head : {
      fontSize : 40,
      paddingTop : 2
    },
    inp : {
      width : width / 1.2,
      marginTop : 100,
      padding : 4,
      borderColor : "black",
      backgroundColor: '#fff',
      borderWidth : 2,
      marginTop : 20,
      padding : 10,
      borderColor : "gray",
      borderWidth : 2,
    
    },
    con : {
      paddingTop : 20,
      padding : 20,
      width : width / 1.2,
      marginTop : 20
      
     
    }
});