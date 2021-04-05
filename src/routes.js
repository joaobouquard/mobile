import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import home from './screens/home/index';
import cadastro from './screens/cadastro/index';
import consulta from './screens/consulta/index';
import alter from './screens/alter/index';
import del from './screens/delete/index';

export default function Routes (){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='home' component={home}/>
                <AppStack.Screen name='cadastro' component={cadastro}/>
                <AppStack.Screen name='consulta' component={consulta}/>
                <AppStack.Screen name='alter' component={alter}/>
                <AppStack.Screen name='del' component={del}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}