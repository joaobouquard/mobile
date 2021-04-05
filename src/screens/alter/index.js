import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';


export default function index() {
  const navi = useNavigation();
  function goToHome(){
    navi.navigate('home')
  };
  
  const [cod, setCod] = useState();
  const [nome, setNome] = useState();
  const [descri, setDescri] = useState();
  const [qtda, setQtda] = useState();
  const [fabricante, setFabricante] = useState();


  async function alterar(){
    
    try{
      await api.put('produtos/'+ cod, {
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
      <Text style={styles.title} > Alterar Dados </Text>
      <StatusBar style="auto" />
        <View>

        <Text>Código</Text>
          <TextInput 
            style={styles.Textinput}
            placeholder={'codigo'}
            onChangeText={(value)=>setCod(value)}
          />

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
           onPress={alterar}
          >
            <Text > Alterar </Text>
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


