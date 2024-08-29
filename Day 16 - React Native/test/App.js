import { Image, Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

export default function App() {
  const windowWidth = Dimensions.get('window').width; 
  const windowHeight = Dimensions.get('window').height;
  return (
    <>
      <ScrollView horizontal style={{marginTop:Platform.OS==="android"?StatusBar.currentHeight:0}}>
          <Image source={{uri: 'https://images.unsplash.com/photo-1724403903272-45c14388cd64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />
        
          <Image source={{uri: 'https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />
        
          <Image source={{uri: 'https://images.unsplash.com/photo-1724075682633-4664473db52c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />
        
          <Image source={{uri: 'https://images.unsplash.com/photo-1724549040066-6b084752625f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />
        
          <Image source={{uri: 'https://images.unsplash.com/photo-1724593887946-a5958b4a58a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />
        
          <Image source={{uri: 'https://images.unsplash.com/photo-1722917123868-f6e4a2d29652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D'}}
          style={{height:windowHeight, width:windowWidth}} />                  
      </ScrollView> 


    </>
  );
}

const styles = StyleSheet.create({
  
});