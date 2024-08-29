import { StatusBar } from 'expo-status-bar';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';

export default function App() {
  // var x = "reactiveNative G1"
  // console.error(x);
  const windowWidth = Dimensions.get('window').width; 
  const windowHeight = Dimensions.get('window').height;
  // const handlePress=()=>{
  //   Alert.alert("Pressed", "this btn is pressed.",
  //   [
  //     {text:"cancel", onPress:()=>{}},
  //     {text:"Ok", onPress:()=>{}},
  //     {text:"bye", onPress:()=>{}}


  //   ]
  // )}
   // const [email, setEmail] = useState("")
  // const [user, setUser] = useState({ name: "", age: "" })
  // const [emailError, setEmailError] = useState("")


  // const handleChange = (val, inputName) => {
  //   setUser({ ...user, [inputName]: val })
  // }
  // const handleEmailChange = (txt) => {
  //   setEmail(txt)
  //   if (txt.length===0)
  //     setEmailError("email is required")
  //   else if(!(/\w+@\w+\.\w+/.test(txt)))
  //     setEmailError("Email is invalid.");
  //   else{
  //     setEmailError("")
  //   }
  // }
  return (
    <>
            {/* <Pressable style={({pressed})=>[style.btnContainer, {opacity: pressed?0.2:1},{transform:[{scale:pressed?0.5:1}]}]} onPress={handlePress}>
          <Text style={style.txt}>Mark as done</Text>
        </Pressable> */}
        {/* <TouchableWithoutFeedback onPress={handlePress}>
          <Image source={require("./assets/1.jpg")}></Image>

        </TouchableWithoutFeedback> */}
      {/* <TouchableOpacity activeOpacity={0.5} onPress={handlePress} style={style.btnContainer}>
           <Text style={style.txt}>Mark as done</Text>
        </TouchableOpacity>       */}
      {/* <TouchableOpacity onPress={handlePress}>
           <Image source={require("./assets/1.jpg")}></Image>
        </TouchableOpacity> */}
      {/* <Button color={"red"} onPress={handlePress}
           title='done'></Button> */}
        {/* <View style={style.view1}> */}
        {/* </View> */}
        {/* <View style={style.view2}></View> */}

     
        {/* <TextInput placeholder='enter your name'
          value={user.name} onChangeText={(txt) => handleChange(txt, "name")}
        // editable={false}
        ></TextInput>
        <TextInput placeholder='enter your age' value={user.age} keyboardType='phone-pad'
          onChangeText={(txt) => handleChange(txt, "age")}
        ></TextInput>
        <TextInput placeholder='enter your email' keyboardType='email-address'
          value={email} onChangeText={(txt) => handleEmailChange(txt)}
        ></TextInput>
        <Text style={{color:"rgb(255,0,0)"}}>{emailError}</Text> */}
    </>
  );
}

const styles = StyleSheet.create({
  
});



const COLORS = [
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Magneta", hexCode: "#d33682" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Green", hexCode: "#4CAF50" },
  { colorName: "Yellow", hexCode: "#FFEB3B" },
  { colorName: "Pink", hexCode: "#FFC0CB" },
  { colorName: "Purple", hexCode: "#8E44AD" },
  { colorName: "Brown", hexCode: "#8B4513" },
];

    {/*        
        <Text style={style.txt}>Here are some boxes of different colors</Text>
        {COLORS.map(obj=><Box key={obj.hexCode}{...obj}></Box>)}
        */}