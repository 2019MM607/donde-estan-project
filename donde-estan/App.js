
import React from 'react';
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import AgregarDesaparecido from './screens/AgregarDesaparecido';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Consejos from './screens/Consejos';
import { DesaparecidoByName } from './screens/DesaparecidoByName';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient()


export default function App() {
  const Drawer = createDrawerNavigator();

  return (

    <NativeBaseProvider>

      <NavigationContainer>

        <QueryClientProvider client={client}>
          <Drawer.Navigator initialRouteName="Desaparecidos">
            <Drawer.Screen name="Desaparecidos"
              component={Home}
              options={{ headerStyle: { backgroundColor: '#0B1F3B' }, headerTintColor: '#BDC2C6', drawerActiveBackgroundColor: '#0B1F3B', drawerActiveTintColor: '#BDC2C6' }}
            />


            <Drawer.Screen name="Agregar desaparecido"
              component={AgregarDesaparecido}
              options={{ headerStyle: { backgroundColor: '#0B1F3B' }, headerTintColor: '#BDC2C6', drawerActiveBackgroundColor: '#0B1F3B', drawerActiveTintColor: '#BDC2C6' }}
            />


            <Drawer.Screen name="Buscar"
              component={DesaparecidoByName}
              options={{ headerStyle: { backgroundColor: '#0B1F3B' }, headerTintColor: '#BDC2C6', drawerActiveBackgroundColor: '#0B1F3B', drawerActiveTintColor: '#BDC2C6' }}
            />

            <Drawer.Screen name="Consejos"
              component={Consejos}
              options={{ headerStyle: { backgroundColor: '#0B1F3B' }, headerTintColor: '#BDC2C6', drawerActiveBackgroundColor: '#0B1F3B', drawerActiveTintColor: '#BDC2C6' }}
            />

          </Drawer.Navigator>
        </QueryClientProvider >
      </NavigationContainer>

    </NativeBaseProvider >

  );
}

