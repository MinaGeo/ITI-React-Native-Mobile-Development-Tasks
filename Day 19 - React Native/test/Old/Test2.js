
// // const [mode, setMode] = useState(2); // 1 for To-Do List, 2 for Color Boxes

// // const [tasks, setTasks] = useState([]);
// // const [toDoItem, setToDoItem] = useState("");
// // const [toDoItemError, setToDoItemError] = useState("");

// // const handleAddTask = () => {
// //   if (toDoItem.length === 0) {
// //     setToDoItemError("Please enter a to-do item.");
// //   } else if (toDoItem.length < 3) {
// //     setToDoItemError("To-do item is less than 3 characters.");
// //   } else {
// //     setTasks((prevTasks) => [
// //       ...prevTasks,
// //       { id: uuid(), name: toDoItem, isDone: false },
// //     ]);
// //     setToDoItem("");
// //     setToDoItemError("");
// //   }
// // };

// // const handleToggleDone = (id) => {
// //   setTasks((prevTasks) =>
// //     prevTasks.map((task) =>
// //       task.id === id ? { ...task, isDone: !task.isDone } : task
// //     )
// //   );
// // };

// // const handleDeleteTask = (id) => {
// //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
// // };


// // const totalTasks = tasks.length;
// // const doneTasks = tasks.filter((task) => task.isDone).length;


// <SafeAreaView style={style.container}>
// {mode === 1 && ( <>
//   <Text style={style.txt}>To Do list</Text>
//   <View style={style.inputContainer}>
//     <TextInput
//       placeholder="enter your to do item"
//       placeholderTextColor="white"
//       value={toDoItem}
//       style={style.txtInput}
//       onChangeText={(txt) => setToDoItem(txt)}
//     />
//     <Pressable
//       style={({ pressed }) => [
//         style.btnContainer,
//         { opacity: pressed ? 0.8 : 1 },
//       ]}
//       onPress={handleAddTask}
//     >
//       <Text style={style.btnTxt}>Add</Text>
//     </Pressable>
//   </View>
//   <Text style={style.txt}>{doneTasks} tasks are done from total of {totalTasks}</Text>
//   <Text style={{ color: "rgb(255,0,0)" }}>{toDoItemError}</Text>
//   {tasks.map((task) => (
//     <ToDoList
//       key={task.id}
//       toDoName={task.name}
//       isDone={task.isDone}
//       onToggleDone={() => handleToggleDone(task.id)}
//       onDelete={() => handleDeleteTask(task.id)}
//     />
//   ))}
// </>)}
// {mode === 2 && ( <>