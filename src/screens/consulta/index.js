import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import { FontAwesome, Feather,FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';


export default function index(){
    const navi = useNavigation();

    function goToAlter(){
        navi.navigate('alter')

    };

    function goToHome(){
        navi.navigate('home')
    };
    const [prodsDados, setProdDados] = useState([]);

    async function loadDados(){
        const response = await api.get('produtos');
        setProdDados(response.data);
    };

    useEffect(()=>{
        loadDados()
    },[]);

    

    return(
        <View style={styles.container}>
            <Text style={styles.title}><FontAwesome name="search" size={90} color="black"/>Consulta</Text>
            <FlatList
                
                style={styles.flat}
                data={ prodsDados }
                keyExtractor = {prodsDados => String(prodsDados.cod)}
                showsVerticalScrollIndicator={false} // barra de rolagem
                renderItem={({item: prodsDados})=>(
                    
                    <View style={styles.List}>
                        
                        <Text>Código: {prodsDados.cod}</Text>                                             
                        <Text>Nome: {prodsDados.nome}</Text>
                        <Text>Descrição: {prodsDados.descri}</Text>
                        <Text>Quantidade: {prodsDados.qtda}</Text>
                        <Text>Fabricante: {prodsDados.fabricante}</Text>
                        <Text>Data: {prodsDados.datahora}</Text>
                        <View style={styles.vbutton}>
                            <TouchableOpacity
                                style={styles.balter}
                                onPress={()=> { goToAlter }
                                }
                                >
                                <View >
                                    <Text style={styles.btA}>
                                        Alterar <Feather name="book-open" size={12} color="black" alignItens='left'/>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity   
                                style={styles.bdel}
                               
                                onPress={()=>{
                                        api.delete('produtos/'+ prodsDados.cod ) 
                                        goToHome();
                                    } 
                                }
                            >
                                <View >
                                    <Text style={styles.btE}>
                                        Excluir <FontAwesome5 name="trash" size={12} color="black" />
                                    </Text>
                                </View>
                            </TouchableOpacity>  
                        </View>
                    </View>
                )}
            />
        </View>

    );
}