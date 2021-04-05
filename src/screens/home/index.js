import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
export default function index(){

    const navi = useNavigation();
    
    function GoToCad(){
        navi.navigate('cadastro')
    };

    function GoToConsult(){
        navi.navigate('consulta')
    };

    function GoToAlter(){
        navi.navigate('alter')
    };
    
    function GoToDelete(){
        navi.navigate('del')
    };

    return(
        <View style={{flex:1, backgroundColor:'#53c8fd'}}>
            <View style={styles.container}>
                <View style={styles.title}>
                <Feather name="layers" size={194} color="black"/>
                </View>          
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.itemesq} onPress={GoToConsult}>              
                    <Feather name="search" size={50} color="black" alignItens='left'/>
                    <Text style={{fontSize:25,marginTop:35}} alignItens='center'>Consulta </Text>                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemesqb} onPress={GoToAlter}>              
                    <Feather name="book-open" size={50} color="black" alignItens='left'/>
                    <Text style={{fontSize:25,marginTop:35}} alignItens='center'>Alteração</Text>                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemdir} onPress={GoToCad}>             
                    <Feather name="plus" size={50} color="black" alignItens='left'/>
                    <Text style={{fontSize:25,marginTop:35}} alignItens='center'> Cadastro</Text>                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemdirb} onPress={GoToDelete}>              
                    <Feather name="delete" size={50} color="black" alignItens='left'/>
                    <Text style={{fontSize:25,marginTop:35}} alignItens='center'>   Deletar  </Text>                   
                </TouchableOpacity>
            </View>
            
        </View>
    );
}