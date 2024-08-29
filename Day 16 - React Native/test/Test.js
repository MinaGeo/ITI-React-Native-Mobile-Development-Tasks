import { StatusBar } from 'expo-status-bar';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';

export default function App() {
  // var x = "reactiveNative G1"
  // console.error(x);
  const windowWidth = Dimensions.get('window').width; 
  const windowHeight = Dimensions.get('window').height;
  return (
    <>
      {/* <ScrollView horizontal style={{marginTop:Platform.OS==="android"?30:0}}>

      <Image source={{uri: 'https://images.unsplash.com/photo-1724403903272-45c14388cd64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      style={{height:windowHeight, width:windowWidth}} />
      <Image source={{uri: 'https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'}}
      style={{height:windowHeight, width:windowWidth}} />

      </ScrollView>  */}



   {/* <View style={{backgroundColor: "cyan", flex:1, justifyContent:"center", alignItems:"center"}}>
      <View style={{backgroundColor: "red", flex:1, width:"30%"}}>
        <Text>1</Text>
      </View>
      <View style={{backgroundColor: "green", flex:1, width:"30%"}}>
        <Text>2</Text>
      </View>
      <View style={{backgroundColor: "yellow", flex:1, width:"30%"}}>
        <Text>3</Text>
      </View>
    </View>
 */}
      {/* <ScrollView>

      <Image source={require("./assets/1.jpg")}></Image>
      <Image source={{uri: 'https://images.unsplash.com/photo-1724403903272-45c14388cd64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        , method:'GET', headers:{"authorization":"token"}
      }}
            style={{aspectRatio:1, height: 360}} />

      {/* <View style={{height:350, width:250, backgroundColor:"green"}}></View> */}
      {/* <View style={{height:350, width:250, backgroundColor:"blue"}}></View> */}
      {/* <View style={{height:350, width:250, backgroundColor:"red"}}></View> */}


      {/* </ScrollView> */} 
      
      {/* <SafeAreaView style={{marginTop:Platform.OS==="android"?30:0}}>
        <Text onPress={()=>{alert("hi")}} style={{fontSize:30, color: "red"}}>Helloo</Text>
        <StatusBar style='auto'></StatusBar>
      </SafeAreaView> */}

    </>
  );
}

const styles = StyleSheet.create({
  
});