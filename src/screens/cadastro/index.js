import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View,TextInput, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Feather } from '@expo/vector-icons';
import styles from './styles'

export default function index() {
  const navi = useNavigation();
  function goToHome(){
    navi.navigate('home')
  };

  const [nome, setNome] = useState();
  const [descri, setDescri] = useState();
  const [qtda, setQtda] = useState();
  const [fabricante, setFabricante] = useState();

  async function cadastrar(){
    try{
      await api.post('produtos', {
        nome:nome,
        descri:descri, 
        qtda:qtda, 
        fabricante:fabricante
      }, goToHome())
    }catch(error){
      console.log("error: ",error);
    }
  }

  return (
    
    <View style={styles.container}>
        <Feather style={styles.icon} name="book-open" size={150} color="black" alignItens='left'/> 
      <Text style={styles.title}>  Cadastro  </Text>
      <StatusBar style="auto" />
        <View>
          <Text>Nome</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'nome'}
            onChangeText={(value)=>setNome(value)}
          />

          <Text>Decrição</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'Descrição'}
            onChangeText={(value)=>setDescri(value)}
          />

          <Text>Quantidade</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'Quantidade'}
            onChangeText={(value)=>setQtda(value)}
          />

          <Text>Fabricante</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'Fabricante'}
            onChangeText={(value)=>setFabricante(value)}
          />
          <TouchableOpacity
           style={styles.button}
           onPress={cadastrar}
          >
            <Text > Cadastrar </Text>
          </TouchableOpacity>

          <View style={styles.buttonV}>
            <TouchableOpacity
            
            onPress={()=>navi.goBack()}
            >
              <Text > Voltar </Text>
            </TouchableOpacity>
          </View>
          
        </View>
    </View>
  );
}


