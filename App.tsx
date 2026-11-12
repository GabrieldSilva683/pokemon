import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import home from './pages/home';
import detalhes from './pages/chorar';
import favorito from './pages/favorito';
import configuracoes from './pages/configuracoes';
import { FavoritosProvider, useFavoritos } from './services/favoritos';
import type { StackParamList, TabParamList, DrawerParamList } from './types/navigation';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function PilhaInicio() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={home} options={{ title: 'Pokémon' }} />
      <Stack.Screen name="Detalhes" component={detalhes} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function Abas() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="inicio"
        component={PilhaInicio}
        options={{
          title: 'Início',
          tabBarIcon: ({ size }) => <Ionicons name="home-outline" color="red" size={size} />,
        }}
      />
      <Tab.Screen
        name="favorito"
        component={favorito}
        options={{
          headerShown: true,
          title: 'Favoritos',
          tabBarIcon: ({ size }) => <Ionicons name="heart-outline" color="red" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

function Rotas() {
  const { escuro } = useFavoritos();
  return (
    <NavigationContainer theme={escuro ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="principal" component={Abas} options={{ title: 'Pokémon' }} />
        <Drawer.Screen name="configuracoes" component={configuracoes} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoritosProvider>
        <Rotas />
      </FavoritosProvider>
    </SafeAreaProvider>
  );
}