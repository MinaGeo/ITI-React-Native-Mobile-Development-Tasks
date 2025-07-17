import { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
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
            options={{headerTitle:"Home Screen",
              // header:()=>null,
              headerStyle:{backgroundColor:"crimson"},
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

// const sections = [
//   {
//     id : "0" ,
//     title: "basic comps",
//     data:[
//     {id:"1",text:"ListView"},
//     {id:"2",text:"TextView"
//     }
//   ]
// },
// {
//   id : "1" ,
//   title: "Complex comps",
//   data:[
//   {id:"3",text:"ScrollView"},
//    {id:"4",text:"View"
//   }
// ]
// },
// ]

// return (
//   <SafeAreaView style={style.container}>
//     <SectionList sections={sections} 
//     renderItem={(x)=>null}
//     renderSectionHeader={({section:{title}})=><Text style={style.headerComp}>{title}</Text>}
//     renderItem={({item})=><Text style={style.itemComp}>{item.text}</Text>}
    
//     >

//     </SectionList>
//   </SafeAreaView>
