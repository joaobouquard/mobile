import {StyleSheet} from 'react-native';



export default styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:'center',
        marginTop:50,
        marginBottom:50,

    },
    container2:{
        flex:2,
        backgroundColor:'#ffffff',
        marginTop:50,
        padding:25,  
    },
    itemesq:{ 
        alignSelf:'flex-start', 
        position:'absolute', 
        padding:5,
        backgroundColor:'#53c8fd',       
        borderRadius:5,
        top:25,
        left:45,
    },
    itemesqb:{ 
        alignSelf:'flex-start', 
        position:'absolute', 
        padding:5,
        backgroundColor:'#53c8fd',       
        borderRadius:5,
        top:185,
        left:45,
    },
    itemdir:{ 
        alignSelf:'flex-end', 
        position:'absolute', 
        padding:5,
        backgroundColor:'#34ff6d',       
        borderRadius:5,
        top:25,
        right:45,
    },itemdirb:{ 
        alignSelf:'flex-end', 
        position:'absolute', 
        padding:5,
        backgroundColor:'#34ff6d',       
        borderRadius:5,
        top:185,
        right:45,
    },
});
