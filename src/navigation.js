import * as React from 'react';
import {  Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Historial from './components/history.js';
import Details from './components/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './components/inicio.js';
import Promos from './components/promo.js';
import Contacto from './components/contacto.js';
import Cuenta from './components/cuenta.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function History(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Historial' component={Historial}/>
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    )
  }
  export default function Menu(){
    return(
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: 'purple',
        
          })}>
          <Tab.Screen name="Inicio" component={Inicio} 
          options={{
            tabBarIcon : ({color})=>(<Image source={require('../Icons/icons8-salto-de-perro-30.png')} style={{tintColor: color, width: 30, height: 30}} ></Image>)
            }}/>
          <Tab.Screen name="History" component={History}
          options={{
            tabBarIcon : ({color})=>(<Image source={require('../Icons/icons8-reloj-24.png')} style={{tintColor: color, width: 30, height: 30}} ></Image>),
            title: "Historial",  headerTitleStyle: {fontWeight: 'bold'} , headerLeft: () =>(<Image source={require('../Icons/icons8-galón-izquierdo-30.png')}  style={{width:17,height:17,marginLeft:20}} ></Image>),
            header:()=>(null)
            }} />
          <Tab.Screen name="Promos" component={Promos} 
          options={{
            tabBarIcon : ({color})=>(<Image source={require('../Icons/icons8-descuento-32.png')} style={{tintColor: color, width: 30, height: 30}} ></Image>)
            }}/>
          <Tab.Screen name="Contacto" component={Contacto} 
          options={{
            tabBarIcon : ({color})=>(<Image source={require('../Icons/comunicacion.png')} style={{tintColor: color, width: 30, height: 30}} ></Image>)
            }}/>
          <Tab.Screen name="Cuenta" component={Cuenta}
           options={{
            tabBarIcon : ({color})=>(<Image source={require('../Icons/user.png')} style={{tintColor: color, width: 30, height: 30}} ></Image>)
            }} />
        </Tab.Navigator>
    )
  }

 