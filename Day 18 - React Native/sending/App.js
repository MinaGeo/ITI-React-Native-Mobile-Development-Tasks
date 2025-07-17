import 'react-native-get-random-values';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
} from "react-native";
import style from "./style";
import Home from "./screens/Home";
import Users from "./screens/Users";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./utils/routes";
import Details from "./screens/Details";
import UsersContextProvider from "./contexts/usersContextProvider";

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <UsersContextProvider>
      <NavigationContainer>
        <SafeAreaView style={style.container}>
          <Stack.Navigator>
            <Stack.Screen 
            options={{headerTitle:"Home",
              headerStyle:{backgroundColor:"gold"},
              headerTintColor:"white",
              headerTitleAlign:"center",
              headerTitleStyle:{fontSize:25}

            }} 
            name={routes.home} component={Home} />
            <Stack.Screen name={routes.about} component={About} />
            <Stack.Screen name={routes.users} component={Users} />
            <Stack.Screen name={routes.details} component={Details} />
        
          </Stack.Navigator>
        </SafeAreaView>
        </NavigationContainer>
      </UsersContextProvider>
  );
}

