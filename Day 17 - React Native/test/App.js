import { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import style from "./style";
import Box from "./components/box";
import ToDoList from "./components/ToDoList";

export default function App() {

  const [mode, setMode] = useState(2); // 1 for To-Do List, 2 for Color Boxes

  const [tasks, setTasks] = useState([]);
  const [toDoItem, setToDoItem] = useState("");
  const [toDoItemError, setToDoItemError] = useState("");

  const handleAddTask = () => {
    if (toDoItem.length === 0) {
      setToDoItemError("Please enter a to-do item.");
    } else if (toDoItem.length < 3) {
      setToDoItemError("To-do item is less than 3 characters.");
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: uuid(), name: toDoItem, isDone: false },
      ]);
      setToDoItem("");
      setToDoItemError("");
    }
  };

  const handleToggleDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };


  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone).length;

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
    { colorName: "Red", hexCode: "#FF0000" },       
    { colorName: "Lime", hexCode: "#00FF00" },      
    { colorName: "Teal", hexCode: "#008080" },      
    { colorName: "Navy", hexCode: "#000080" },      
    { colorName: "Olive", hexCode: "#808000" },     
    { colorName: "Maroon", hexCode: "#800000" },    
    { colorName: "Silver", hexCode: "#C0C0C0" },    
    { colorName: "Gold", hexCode: "#FFD700" },      
    { colorName: "Turquoise", hexCode: "#40E0D0" }, 
    { colorName: "Coral", hexCode: "#FF7F50" },     
  ];
  
  return (
    <>
      <SafeAreaView style={style.container}>
      {mode === 1 && ( <>
        <Text style={style.txt}>To Do list</Text>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="enter your to do item"
            placeholderTextColor="white"
            value={toDoItem}
            style={style.txtInput}
            onChangeText={(txt) => setToDoItem(txt)}
          />
          <Pressable
            style={({ pressed }) => [
              style.btnContainer,
              { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleAddTask}
          >
            <Text style={style.btnTxt}>Add</Text>
          </Pressable>
        </View>
        <Text style={style.txt}>{doneTasks} tasks are done from total of {totalTasks}</Text>
        <Text style={{ color: "rgb(255,0,0)" }}>{toDoItemError}</Text>
        {tasks.map((task) => (
          <ToDoList
            key={task.id}
            toDoName={task.name}
            isDone={task.isDone}
            onToggleDone={() => handleToggleDone(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </>)}
      {mode === 2 && ( <>
      <ScrollView>
                   
        <Text style={style.txt}>Here are some boxes of different colors</Text>
        {COLORS.map(obj=><Box key={obj.hexCode}{...obj}></Box>)}
       
      </ScrollView>
      </>)}
      </SafeAreaView>




    </>
  );
}
