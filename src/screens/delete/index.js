import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';


export default function index() {
  const navi = useNavigation();
  const [cod, setCod] = useState();

  async function del(){
    try{
      await api.delete('produtos/'+ cod)
    }catch(error){
      console.log("error: ",error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.viewin}> Deletar Dados </Text>
      <StatusBar style="auto" />
        <View>

        <Text style={styles.viewin}>Código</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'Código'}
            onChangeText={(value)=>setCod(value)}
          />

          <TouchableOpacity
           style={styles.button}
           onPress={del}
          >
            <Text > Deletar </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.buttonV}
           onPress={()=>navi.goBack()}
          >
            <Text > Voltar </Text>
          </TouchableOpacity>

         
        </View>
    </View>
  );
}


