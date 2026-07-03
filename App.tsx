import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from 'components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import Profile from 'screens/Profile';
import About from 'screens/Orders';
import ProductDetail from 'components/ProductDetail';
import Product from 'components/Product';
import Cart from 'screens/Cart';
import Wishlist from 'screens/Wishlist';
import { Ionicons } from '@expo/vector-icons';
import Orders from 'screens/Orders';
import ProductDynamic from 'components/ProductDynamic';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
 
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" options={{headerShown: false}}/>
      <Stack.Screen component={Cart} name="Cart" options={{headerShown: false}}/>
      <Stack.Screen component={Wishlist} name="Wishlist" options={{headerShown: false}}/>
      <Stack.Screen component={Product} name="Product" options={{headerShown: false}}/>
      <Stack.Screen component={ProductDynamic} name="ProductDynamic" options={{headerShown: false}}/>
      <Stack.Screen component={ProductDetail} name="ProductDetail" options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
                {/* <StatusBar barStyle="dark-content" backgroundColor="#000000ff" /> */}
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                

      <NavigationContainer>
        <Header/>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#465240',
          tabBarInactiveTintColor: 'black',
        }}>
          <Tab.Screen component={MyStack} name='Home' options={{tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={focused ? "#0A4174" : "black"} // agro-green-500 : agro-earth-500
            />
          )}}/>
          <Tab.Screen component={Orders} name='My Orders' options={{tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              size={26}
              color={focused ? "#0A4174" : "black"} // agro-green-500 : agro-earth-500
            />
          )}}/>
          <Tab.Screen component={Profile} name='Profile' options={{tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={focused ? "#0A4174" : "black"} // agro-green-500 : agro-earth-500
            />
          )}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
